import { css, Theme } from '@emotion/react';
import Layout from 'components/common/Layout';

function Home() {
  return (
    <main css={dCss}>
      <Layout>
        <h1>개발자들</h1>
      </Layout>
    </main>
  );
}

export default Home;

const dCss = (theme: Theme) => css`
  width: 100%;
  height: 2000px;
`;
