import { useEffect, useState, ChangeEvent, FC } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
} from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { initializeFirebaseApp } from '@src/lib/firebase/firebase'
import { useUpdateDataOnFirestore } from '@src/hooks/firebase/useUpdateDataOnFirestore'
import { useCustomToast } from '@src/hooks/useCustomToast'
import Image from 'next/image'
import { Timestamp } from 'firebase/firestore'
import Multiselect from 'multiselect-react-dropdown'
import { useAllTags } from '@src/hooks/firestoreDocument/useTag'

interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  documentId: string
  updateField: string
  collectionName: string
  label: string
  inputType?:
    | 'text'
    | 'textarea'
    | 'file'
    | 'select'
    | 'timestamp'
    | 'checkbox'
    | 'tags'
  selectOptions?: { key: string; value: string }[]
  onUpdated?: () => void
  currentValue?: string | number | boolean | Timestamp | string[] | undefined
}

interface CommonInputProps {
  formValue?:
    | string
    | number
    | boolean
    | Timestamp
    | string[]
    | undefined
    | { lat: number; lng: number; address: string }
  setFormValue?: (
    value:
      | string
      | number
      | boolean
      | Timestamp
      | string[]
      | { lat: number; lng: number; address: string }
      | undefined
  ) => void
  currentValue?:
    | string
    | number
    | boolean
    | Timestamp
    | string[]
    | undefined
    | { lat: number; lng: number; address: string }
  selectOptions?: { key: string; value: string }[]
  setPreviewUrl?: (url: string | null) => void
}

const TextInput: FC<CommonInputProps> = ({
  formValue = '',
  setFormValue = () => {},
  currentValue = '',
}) => (
  <Input
    value={formValue as string}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setFormValue(e.target.value)
    }
    placeholder={currentValue as string}
  />
)

const TextAreaInput: FC<CommonInputProps> = ({
  formValue = '',
  setFormValue = () => {},
  currentValue = '',
}) => (
  <Textarea
    value={formValue as string}
    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
      setFormValue(e.target.value)
    }
    placeholder={currentValue as string}
  />
)

interface FileInputProps extends CommonInputProps {
  previewUrl?: string | null
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void
}

const FileInput: FC<FileInputProps> = ({ previewUrl, handleImageUpload }) => {
  return (
    <>
      <Input type="file" onChange={handleImageUpload} size="sm" />
      {previewUrl && (
        <div
          style={{
            width: '100%',
            marginTop: '10px',
          }}
        >
          <Image
            src={previewUrl}
            alt="プレビュー画像"
            width={500}
            height={300}
          />
        </div>
      )}
    </>
  )
}

const SelectInput: FC<CommonInputProps> = ({
  formValue = '',
  setFormValue = () => {},
  selectOptions = [],
}) => (
  <select
    value={formValue as string}
    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
      setFormValue(e.target.value)
    }
    style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
  >
    {selectOptions.map((option) => (
      <option key={option.key} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)

const TimestampInput: FC<CommonInputProps> = ({
  formValue,
  setFormValue = () => {},
}) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000

  const localISOTime = (date: Date) =>
    new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 16)

  return (
    <Input
      type="datetime-local"
      value={
        formValue instanceof Timestamp ? localISOTime(formValue.toDate()) : ''
      }
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setFormValue(
          Timestamp.fromDate(new Date(e.target.valueAsNumber + timezoneOffset))
        )
      }
    />
  )
}

const CheckboxInput: FC<CommonInputProps> = ({
  formValue = false,
  setFormValue = () => {},
}) => (
  <Checkbox
    isChecked={formValue as boolean}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setFormValue(e.target.checked)
    }
  />
)

const TagsInput: FC<CommonInputProps> = ({
  formValue = [],
  setFormValue = () => {},
  selectOptions = [],
}) => (
  <Multiselect
    options={selectOptions}
    displayValue="value"
    onSelect={(selectedList: any[]) =>
      setFormValue(selectedList.map((item) => item.key))
    }
    selectedValues={selectOptions.filter((option) =>
      (formValue as string[]).includes(option.key)
    )}
  />
)

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  documentId,
  updateField,
  collectionName,
  label,
  inputType = 'text',
  onUpdated,
  currentValue,
}) => {
  const [formValue, setFormValue] = useState<
    | string
    | number
    | boolean
    | Timestamp
    | string[]
    | undefined
    | { lat: number; lng: number; address: string }
  >(currentValue)
  useEffect(() => {
    setFormValue(currentValue)
  }, [updateField, currentValue])
  const { storage } = initializeFirebaseApp()
  const toast = useCustomToast()
  const updateDataOnFirestore = useUpdateDataOnFirestore()
  const { tags } = useAllTags()

  const selectOptions = tags.map((tag) => ({ key: tag.id, value: tag.title }))

  const handleFormSubmit = async () => {
    try {
      await updateDataOnFirestore(
        collectionName,
        documentId,
        updateField,
        formValue
      )

      onClose()
      toast('success', '更新が完了しました', `${label}を更新しました`)
      if (onUpdated) onUpdated()
    } catch (error) {
      console.error(error)
      toast('error', 'エラーが発生しました', '更新に失敗しました')
    }
  }

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true)
    if (!e.target.files || e.target.files.length === 0) {
      setIsUploading(false)
      return
    }
    const file = e.target.files[0]

    if (!file) {
      setIsUploading(false)
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)

    const fileRef = ref(
      storage,
      `images/${collectionName}/${updateField}/${documentId}/${file.name}`
    )
    try {
      await uploadBytes(fileRef, file)
      const fileUrl = await getDownloadURL(fileRef)
      setFormValue(fileUrl)
    } catch (error) {
      console.error('Upload failed:', error)
    }
    setIsUploading(false)
  }

  // 入力コンポーネントのマッピングオブジェクト
  const inputTypeComponents = {
    text: TextInput,
    textarea: TextAreaInput,
    file: FileInput,
    select: SelectInput,
    timestamp: TimestampInput,
    checkbox: CheckboxInput,
    tags: TagsInput,
  }

  // 選択された入力タイプに対応するコンポーネント
  const InputComponent = inputTypeComponents[inputType]
  const [isUploading, setIsUploading] = useState<boolean>(false) // アップロード中の状態を追跡するステート

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="90vw">
        <ModalHeader>編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>{label}</FormLabel>
            {isOpen && (
              <InputComponent
                formValue={formValue}
                setFormValue={setFormValue}
                currentValue={currentValue}
                selectOptions={selectOptions}
                handleImageUpload={handleImageUpload}
                previewUrl={previewUrl}
              />
            )}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 disabled:bg-blue-300"
            onClick={handleFormSubmit}
            disabled={
              formValue === '' || formValue === currentValue || isUploading
            }
          >
            保存
          </button>
          <Button
            onClick={() => {
              onClose()
              setFormValue(undefined)
            }}
          >
            キャンセル
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
