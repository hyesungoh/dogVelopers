import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class DogvelopersDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content="/vercel.svg" />

          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta property="og:title" content="동아리 개발자들" />
          <meta property="og:description" content="동아리 개발자들" />

          {/* font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DogvelopersDocument;
