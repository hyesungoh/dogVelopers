import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>개발자들</title>
      </Head>

      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
