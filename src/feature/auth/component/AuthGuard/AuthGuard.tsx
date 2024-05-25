import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import type { ReactNode } from 'react'
import { useRouter } from '@src/hooks/useRouter'
import { CustomSpinner } from '@src/components/CustomSpinner'

type Props = {
  children: ReactNode
}

export const AuthGuard = ({ children }: Props) => {
  const { user } = useAuthContext()
  const { push } = useRouter()

  if (typeof user === 'undefined') {
    return <CustomSpinner caption={'ユーザー情報を取得中…'} />
  }

  if (user === null) {
    push((path) => path.signin.$url())
    return null
  }

  return <>{children}</>
}
