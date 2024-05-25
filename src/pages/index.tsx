import CustomPage from '@src/components/CustomPage'
import { pagesPath } from '@src/lib/pathpida/$path'
import { Avatar, Link } from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { useUserById } from '@src/hooks/firestoreDocument/useUser'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Navigate } from '@src/components/Navigate'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Page = () => {
  const { user: authUser, loading: authUserLoading } = useAuthContext()

  const { user, loading: userLoading } = useUserById(authUser?.uid)

  return (
    <CustomPage
      title="トップページ"
      isSetUpOGP={true}
      isAuthPageHidden={true}
      isTitleHidden={true}
      loading={authUserLoading || userLoading}
      isLimitWidth={false}
    >
      <div className="w-full relative h-full">
        <div className="absolute left-0 top-0 min-w-[20vw] w-auto h-full bg-white border-r border-gray-200 shadow-sm z-10 md:block hidden">
          <div className="mt-6 w-full flex flex-col items-start pl-4 gap-2">
            <Navigate href={pagesPath.$url()}>
              <p className="text-gray-700 hover:text-black hover:font-semibold my-2">
                トップページ
              </p>
            </Navigate>
            <Navigate href={pagesPath.mypage.profile.$url()}>
              <p className="text-gray-700 hover:text-black hover:font-semibold my-2">
                設定
              </p>
            </Navigate>
            <div>
              <p
                className="text-gray-700 my-2
                "
              >
                営業ページ
              </p>
            </div>
          </div>
        </div>
        <div className="absolute  md:w-[80vw] w-full top-0 md:left-[20vw] flex gap-4 pb-10 pt-6 flex-col overflow-y-scroll h-full">
          <div className="border border-gray-200 rounded-md shadow-sm bg-white p-6 flex flex-col items-center w-[90%] mx-auto">
            <Avatar
              flexShrink={0}
              width={20}
              height={20}
              src={user?.iconImageUrl || 'default_image_url'}
              className="absolute"
            />
            <h2 className="text-xl md:text-2xl font-bold mt-4 text-center">
              {user?.name}
            </h2>
            <div className="mt-6 w-full flex flex-col items-center gap-2 md:hidden block">
              <Link href={pagesPath.mypage.profile.$url().pathname}>設定</Link>
            </div>
          </div>
        </div>
      </div>
    </CustomPage>
  )
}

export default Page
