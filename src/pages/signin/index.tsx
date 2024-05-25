import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import Image from 'next/image'
import { Input } from '@chakra-ui/react' // Added useToast import here
import { useSaveDataToFirestore } from 'src/hooks/firebase/useSaveDataToFirestore'
import { useRouter } from 'next/router'
import { useCustomToast } from '@src/hooks/useCustomToast'
import type { FirebaseError } from 'firebase/app'

export const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('') // 組織名の状態を追加
  const saveDataToFirestore = useSaveDataToFirestore()
  const toast = useCustomToast()
  const { push } = useRouter()

  const [mode, setMode] = useState<'signin' | 'signup'>('signup')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const auth = getAuth()
    try {
      if (mode === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

        await saveDataToFirestore(
          'users',
          {
            email,
            name: user,
            createdTime: new Date(),
            updatedTime: new Date(),
          },
          userCredential.user.uid
        )
        toast('success', '新規登録に成功しました。')
        push('/')
      } else if (mode === 'signin') {
        await signInWithEmailAndPassword(auth, email, password)
        toast('success', 'サインインに成功しました。')
        push('/')
      }
    } catch (error) {
      const firebaseError = error as FirebaseError // エラーをFirebaseErrorにキャスト
      console.error(error)
      if (firebaseError.code) {
        switch (firebaseError.code) {
          case 'auth/invalid-email':
            toast('error', 'メールアドレスの形式が正しくありません。')
            break
          case 'auth/user-disabled':
            toast('error', 'このユーザーは無効にされています。')
            break
          case 'auth/email-already-in-use':
            toast('error', 'このメールアドレスは既に使用されています。')
            break
          case 'auth/user-not-found':
            toast('error', 'ユーザーが見つかりません。')
            break
          case 'auth/wrong-password':
            toast('error', 'パスワードが間違っています。')
            break
          case 'auth/too-many-requests':
            toast('error', 'リクエストが多すぎます。後ほど再試行してください。')
            break
          default:
            toast('error', 'ログインに失敗しました。もう一度お試しください。')
        }
      } else {
        toast('error', 'ログインに失敗しました。もう一度お試しください。')
      }
    }
  }

  return (
    <div className="w-[100%] flex  flex-col  items-center h-[100%] overflow-y-hidden">
      <div className="md:w-3/5 flex  w-4/5 md:mt-36 mt-40 flex-col items-center justify-center bg-white">
        <Image
          src="/title.svg"
          width="380"
          height="50"
          alt="Countan"
          className=" md:block hidden m-4"
        />
        <Image
          src="/title.svg"
          width="150"
          height="50"
          alt="Countan"
          className=" md:hidden block my-6 mb-10"
        />
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center w-4/5"
        >
          {mode === 'signup' && (
            <Input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="ユーザー名"
              variant="filled"
              mb={4}
              size="xs"
              required
            />
          )}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
            variant="filled"
            mb={4}
            size="xs"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            variant="filled"
            mb={4}
            size="xs"
            required
          />
          <button
            className="bg-[#ea5514] text-white px-3 py-1 text-sm font-bold rounded focus:outline-none focus:ring-2 focus:ring-[#ea5514] focus:ring-opacity-50"
            type="submit"
          >
            {mode === 'signup' ? '新規登録' : 'サインイン'}
          </button>
        </form>
        <button
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          className="my-4"
        >
          {mode === 'signin' ? 'サインアップはこちら' : 'サインインはこちら'}
        </button>
      </div>
    </div>
  )
}
export default SignInPage
