import React, { useState } from 'react'
import CustomPage from '@src/components/CustomPage'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false)
    }
  }

  const CTA = () => {
    return (
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#FFD600] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#FFEB80] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD600] disabled:pointer-events-none disabled:opacity-50"
          href="../signin"
          rel="ugc"
        >
          今すぐ無料で始める
        </a>
        {/* <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-transparent border border-black px-8 text-sm font-medium text-black shadow transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50"
          onClick={toggleModal}
          rel="ugc"
        >
          デモを見る
        </a> */}
      </div>
    )
  }

  return (
    <CustomPage
      title="Countanとは"
      isAuthPageHidden={false}
      isTitleHidden={true}
      isLimitWidth={false}
    >
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-[#FFD600] text-black">
          <a className="flex items-center justify-center" href="#" rel="ugc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 text-black"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            </svg>
            <span className="sr-only">Countan</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4 text-black"
              href="/../support/contact"
              rel="ugc"
            >
              お問い合わせ
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-6 md:py-6 lg:py-12 xl:py-48 bg-[#FFD600] text-black">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                      Countan <br />- 非店舗型フードサービス向け
                      完全無料の注文管理
                    </h1>
                    <p className="max-w-[600px] text-black md:text-xl ">
                      Countanを使えば、簡単に注文を管理できます。
                      <br />
                      キッチンカーや出店に最適です。
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-[#FFD600] shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50"
                      href="../signin"
                      rel="ugc"
                    >
                      今すぐ無料で始める
                    </a>
                  </div>
                </div>
                <Image
                  src="/lp_0.png"
                  width="550"
                  height="550"
                  layout="responsive"
                  objectFit="cover"
                  alt="Countanのスクリーンショット"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-6 md:py-6 lg:py-12 bg-gray-100 ">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      リアルタイムの注文追跡
                    </h2>
                    <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                      Countanを使えば、注文をリアルタイムで追跡できるので、常に最新の状況を把握できます。
                    </p>
                  </div>
                  <CTA />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-6 md:py-6 lg:py-12 bg-gray-100 ">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      番号札提供
                    </h2>
                    <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                      Countanは、QRコードを生成してお客様に番号札を提供します。番号札は、店舗の提供情報と連動しています。
                    </p>
                  </div>
                  <CTA />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-6 md:py-6 lg:py-12 bg-gray-100 ">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      売上管理
                    </h2>
                    <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                      Countanを使えば、売上データをExcelにエクスポートできるので、ビジネスの実績を追跡し、適切な意思決定ができます。
                    </p>
                  </div>
                  <CTA />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-6 md:py-6 lg:py-12 pt-24 bg-gray-100 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <button
                  className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50"
                  onClick={() => window.open('../support/contact', '_self')}
                >
                  <span className="z-10 pr-2 font-bold">Contact Us ?</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-3.5 flex items-center justify-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neutral-50"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/demo-image.jpg" alt="デモ画像" />
            <button onClick={toggleModal}>閉じる</button>
          </div>
        </div>
      )}
    </CustomPage>
  )
}

export default Home
