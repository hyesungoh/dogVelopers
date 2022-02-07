import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const TITLE = '동아리 개발자들';
const DESCRIPTION =
  '개발자들은 대학생 개발자 동아리로써 여러 스터디와 프로젝트를 통해 개개인의 역량과 협업 능력을 증대시키고자 합니다.';

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
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />

          <meta name="description" content={DESCRIPTION} />
          <meta
            name="keywords"
            content="IT동아리,개발자들,개발자,성공회대,개발동아리,대학생,대학생개발동아리,IT,동아리"
          />
          <meta property="og:url" content="https://www.dogvelopers.com" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content="/metabackground.jpeg" />

          {/* for twitter */}
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />

          {/* for font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
            rel="stylesheet"
          />

          {/* for google analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
            }}
          />

          {/* for hotjar */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJ_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          ></script>
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
