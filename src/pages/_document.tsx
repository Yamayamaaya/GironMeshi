import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  override render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta name="description" content="議論しながら飯を食おう" />
          <meta property="og:title" content="GIRONMESHI" />
          <meta property="og:description" content="議論しながら飯を食おう" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="" /> */}
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:site_name" content="GIRONMESHI" />
          <meta property="og:locale" content="ja_JP" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
