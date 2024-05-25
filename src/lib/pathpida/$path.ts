export const pagesPath = {
  "lp": {
    $url: (url?: { hash?: string }) => ({ pathname: '/lp' as const, hash: url?.hash })
  },
  "mypage": {
    "profile": {
      $url: (url?: { hash?: string }) => ({ pathname: '/mypage/profile' as const, hash: url?.hash })
    }
  },
  "signin": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signin' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
