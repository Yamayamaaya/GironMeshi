import { chakra, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const router = useRouter()
  const isProfilePage = () => {
    return router.pathname.includes('/mypage/profile')
  }
  return (
    <chakra.footer
      py={4}
      color={'white'}
      className={`bottom-0 z-50 bg-brand shadow-sm border-t border-gray-200 left-0 `}
    >
      <Container maxW={'container.lg'}>
        <div className="flex items-center justify-between w-full px-8">
          <button>
            <Image
              src="/footer/topic.svg"
              width="32"
              height="80"
              alt="topic"
              className=""
            />
          </button>
          <button>
            <Image
              src="/footer/group.svg"
              width="34"
              height="80"
              alt="group"
              className=""
            />
          </button>
          <button
            onClick={() => {
              router.push('/mypage/profile')
            }}
          >
            {isProfilePage() ? (
              <Image
                src="/footer/account-selected.svg"
                width="25"
                height="80"
                alt="profile"
                className=""
              />
            ) : (
              <Image
                src="/footer/account.svg"
                width="25"
                height="80"
                alt="account"
                className=""
              />
            )}
          </button>
        </div>
      </Container>
    </chakra.footer>
  )
}
