import { css, Theme } from '@emotion/react';
import Layout from 'components/common/Layout';
import Header from 'components/main/Header';

function Home() {
  return (
    <main css={dCss}>
      <Header />
      <section>
        <Layout>
          <h1>개발자들</h1>
        </Layout>
      </section>
    </main>
  );
}

export default Home;

const dCss = (theme: Theme) => css`
  width: 100%;
  height: 2000px;
`;
