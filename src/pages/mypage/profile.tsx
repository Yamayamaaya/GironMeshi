import { Avatar } from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { useUserById } from '@src/hooks/firestoreDocument/useUser'
import CustomPage from '@src/components/CustomPage'
import { userPropertiesLabel, type User } from '@src/types/user'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { displayWithLineBreaks } from '@src/feature/displayWithLineBreaks'
import { EditModal } from '@src/components/EditModal'

export const ProfilePage = () => {
  const { user: authUser } = useAuthContext()
  const { user, loading } = useUserById(authUser?.uid)

  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const [updateProperty, setUpdateProperty] = useState<keyof User>('name')

  const [isEdit, setIsEdit] = useState(false)

  const EditButton = ({ property }: { property: keyof User }) => {
    return (
      <button
        onClick={() => {
          setUpdateProperty(property)
          onOpen()
        }}
        className={`flex items-center justify-center w-4 h-4 ${
          isEdit ? 'block' : 'hidden'
        }`}
      >
        <FontAwesomeIcon icon={faPen} size="sm" width="12" height="12" />
      </button>
    )
  }

  return (
    <CustomPage
      title="設定"
      isAuthPageHidden={true}
      loading={loading}
      isLimitWidth={false}
      isTitleHidden={true}
    >
      <div className="w-full flex items-center justify-center">
        <div className="bg-white w-full max-w-md overflow-hidden">
          <div className="relative h-44 bg-[#ea5514] flex items-start justify-center">
            <div className="absolute  -bottom-12 bg-white rounded-full w-24 h-24 border-4 border-gray-900  flex items-center justify-center text-6xl">
              <Avatar
                flexShrink={0}
                width={24}
                height={24}
                src={user?.iconImageUrl || 'default_image_url'}
                className="absolute"
              />
              <div className="absolute bottom-0 right-1">
                <EditButton property="iconImageUrl" />
              </div>
            </div>
          </div>
          <div className="pt-16 pb-6 px-10 text-center">
            <h2 className="text-2xl font-bold mb-1 gap-2 flex items-center justify-center">
              {user?.name}
              <EditButton property="name" />
            </h2>
            <p className="text-gray-500  mb-4">Software Engineer</p>
            <p className="w-full text-center text-gray-700  mb-6 flex items-end justify-center flex-col">
              {displayWithLineBreaks(user?.description)}
              <EditButton property="description" />
            </p>

            <div className="flex justify-center gap-4 mt-20 mb-6">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full rounded-2xl"
                onClick={() => {
                  setIsEdit(!isEdit)
                }}
              >
                {isEdit ? 'Done' : 'Edit Profile'}
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full rounded-2xl">
                Share Profile
              </button>
            </div>
            {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full rounded-2xl">
              Follow
            </button> */}
          </div>
        </div>
      </div>

      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        documentId={authUser?.uid || ''}
        updateField={updateProperty}
        collectionName="users"
        label={userPropertiesLabel[updateProperty]}
        inputType={
          updateProperty === 'description'
            ? 'textarea'
            : updateProperty === 'iconImageUrl'
            ? 'file'
            : updateProperty === 'includePaymentMethodInOrder' ||
              updateProperty === 'isSetUpWaitingCardLimit'
            ? 'checkbox'
            : 'text'
        }
        currentValue={
          updateProperty === 'paymentMethods' ? '' : user?.[updateProperty]
        }
      />
    </CustomPage>
  )
}

export default ProfilePage
