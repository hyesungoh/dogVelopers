import { css } from '@emotion/react';

import IntroduceSection from 'components/main/IntroduceSection';
import RecordSection from 'components/main/RecordSection';
import HangoutSection from 'components/main/HangoutSection';

function Home() {
  return (
    <main css={mainStyle}>
      <IntroduceSection />
      <RecordSection />
      <HangoutSection />
    </main>
  );
}

export default Home;

const mainStyle = css``;
