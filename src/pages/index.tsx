import { css } from '@emotion/react';
import Header from 'components/main/Header';
import Introduce from 'components/main/Introduce';

function Home() {
  return (
    <main css={mainStyle}>
      <Header />
      <Introduce />
    </main>
  );
}

export default Home;

const mainStyle = css`
  width: 100vw;
  overflow-x: clip;
`;
