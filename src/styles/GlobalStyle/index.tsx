import { css, Global, Theme } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color: ${theme.color.white};
    background-color: ${theme.color.black900};
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: ${theme.fontWeight.normal};
    font-size: 16px;
    overflow-x: hidden;

    ${theme.mediaQuery.tablet} {
      font-size: 14px;
    }

    ${theme.mediaQuery.mobile} {
      font-size: 12px;
    }
  }

  h1 {
    font-weight: ${theme.fontWeight.bold};
  }

  a,
  button {
    all: unset;
    cursor: pointer;
  }
`;
