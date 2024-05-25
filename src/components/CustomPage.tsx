import Head from 'next/head'
// import { Spinner } from '@chakra-ui/react'
import { AuthGuard } from 'src/feature/auth/component/AuthGuard/AuthGuard'
import CustomSpinner from './CustomSpinner'
import { useEffect, useState } from 'react'

type PageProps = {
  title: string // タイトル
  children: React.ReactNode
  isSetUpOGP?: boolean // OGPを設定するかどうか
  isTitleHidden?: boolean // タイトルを非表示にするかどうか
  isAuthPageHidden?: boolean // ログイン必須のページかどうか
  loading?: boolean // ローディング中かどうか
  isLimitWidth?: boolean // 幅を制限するかどうか
}

const CustomPage: React.FC<PageProps> = ({
  title,
  children,
  isSetUpOGP = true,
  isTitleHidden = false,
  isAuthPageHidden = false,
  loading = false,
  isLimitWidth = true,
}) => {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  return (
    <>
      {isSetUpOGP && (
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </Head>
      )}
      {!isOnline && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CustomSpinner caption={''} />
          <p className="text-white text-center mt-32">
            インターネット接続が不安定です。
          </p>
        </div>
      )}

      <div
        className={`${
          isLimitWidth ? 'md:px-[15vw] px-[5vw]' : ''
        } flex  flex-col items-center  h-full overflow-x-hidden w-screen
        `}
      >
        {!isTitleHidden && (
          <h1 className="text-2xl my-6 font-bold w-[100vw] text-center">
            {title}
          </h1>
        )}
        {loading ? (
          <CustomSpinner caption={'読込中…'} />
        ) : isAuthPageHidden ? (
          <AuthGuard>{children}</AuthGuard>
        ) : (
          children
        )}
      </div>
    </>
  )
}

export default CustomPage
