import React, { useCallback } from 'react'
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

interface UseConfirmAlertProps {
  onConfirm: () => void
  messages: {
    header?: string
    body?: string
    confirm?: string
    cancel?: string
  }
}

export const useConfirmAlert = ({
  onConfirm,
  messages,
}: UseConfirmAlertProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<HTMLButtonElement>(null)

  const onConfirmAction = useCallback(() => {
    onConfirm()
    onClose()
  }, [onConfirm, onClose])

  const ConfirmAlertUI = useCallback(
    () => (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {messages.header || 'Confirmation'}
            </AlertDialogHeader>

            <AlertDialogBody>
              {messages.body || 'Are you sure you want to proceed?'}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {messages.cancel || 'Cancel'}
              </Button>
              <Button colorScheme="red" onClick={onConfirmAction} ml={3}>
                {messages.confirm || 'Confirm'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    ),
    [isOpen, messages, onConfirmAction, onClose]
  )

  return { onOpen, ConfirmAlertUI }
}
