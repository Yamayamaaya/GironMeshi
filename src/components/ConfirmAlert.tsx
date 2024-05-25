import React, { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

interface ConfirmAlertProps {
  onOpen: () => void
  onConfirm: () => void
  messages?: {
    header?: string
    body?: string
    confirm?: string
    cancel?: string
  }
}

const ConfirmAlertComponent: React.FC<ConfirmAlertProps> = ({
  onOpen,
  onConfirm,
  messages,
}) => {
  const { isOpen, onOpen: openDialog, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  // ダイアログを開くための外部トリガーを処理
  React.useEffect(() => {
    if (isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <>
      <Button colorScheme="red" onClick={openDialog}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {messages?.header || ''}
            </AlertDialogHeader>

            <AlertDialogBody>
              {messages?.body || '本当に実行しますか？'}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {messages?.cancel || 'キャンセル'}
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onConfirm()
                  onClose()
                }}
                ml={3}
              >
                {messages?.confirm || '実行'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ConfirmAlertComponent
