import { css } from '@emotion/react';
import Header from 'components/main/Header';
import Introduce from 'components/main/Introduce';
import Record from 'components/main/Record';

function Home() {
  return (
    <main css={mainStyle}>
      <Header />
      <Introduce />
      <Record />
    </main>
  );
}

export default Home;

const mainStyle = css`
  width: 100vw;
  overflow-x: clip;
`;
