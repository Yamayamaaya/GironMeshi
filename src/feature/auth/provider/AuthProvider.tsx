import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { User } from '@firebase/auth'
import { getAuth, onAuthStateChanged } from '@firebase/auth'

export type GlobalAuthState = {
  user: User | null | undefined
  loading: boolean // loading プロパティを追加
  error: Error | null // error プロパティを追加
}
const initialState: GlobalAuthState = {
  user: undefined,
  loading: true,
  error: null,
}
const AuthContext = createContext<GlobalAuthState>(initialState)

type Props = { children: ReactNode }

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true) // loading 状態を追加
  const [error, setError] = useState<Error | null>(null) // error 状態を追加

  useEffect(() => {
    try {
      const auth = getAuth()
      return onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false) // ユーザーの状態が確認できたら、loading を false に設定
      })
    } catch (error) {
      setError(error as Error) // エラーが発生した場合、error を設定
      setLoading(false) // エラーが発生しても、loading を false に設定
      return () => {}
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
