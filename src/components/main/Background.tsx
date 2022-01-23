import { css, Theme } from '@emotion/react';

import LottieWrapper from 'components/common/LottieWrapper';
import backgroundLottieData from 'assets/lottie/bubbleBg.json';

function Background() {
  return (
    <div css={wrapperStyle}>
      <div css={lottieWrapperStyle}>
        <LottieWrapper lottieData={backgroundLottieData} />
      </div>
    </div>
  );
}

export default Background;

const wrapperStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
  overflow-x: hidden;
`;

const lottieWrapperStyle = (theme: Theme) => css`
  width: 100%;

  ${theme.mediaQuery.mobile} {
    width: 180%;
    transform: translateX(-50vw);
  }
`;
