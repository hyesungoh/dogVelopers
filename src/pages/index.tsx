import { css } from '@emotion/react';

import IntroduceSection from 'components/main/IntroduceSection';
import RecordSection from 'components/main/RecordSection';
import HangoutSection from 'components/main/HangoutSection';
import RecruitSection from 'components/main/RecruitSection';

function Home() {
  return (
    <main css={mainStyle}>
      <IntroduceSection />
      <RecordSection />
      <HangoutSection />
      <RecruitSection />
    </main>
  );
}

export default Home;

const mainStyle = css``;
