import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeFirebaseApp } from '@src/lib/firebase/firebase'
import { AuthProvider } from '@src/feature/auth/provider/AuthProvider'
import { Footer } from '@src/components/Footer'
import { theme } from '@src/lib/chakra/theme'
import React, { useState, useEffect } from 'react'
import '../styles/globals.css'

initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  const [viewportHeight, setViewportHeight] = useState('100vh')

  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight + 'px'
      setViewportHeight(height)
    }

    window.addEventListener('resize', updateHeight)
    updateHeight() // 初期設定

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <>
      <Head>
        <title>GIRONMESHI</title>
        <link rel="icon" href="/favicon.png " />
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <div
            className="flex flex-col min-h-screen"
            style={{ minHeight: viewportHeight }}
          >
            <div className="grow bg-white">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
