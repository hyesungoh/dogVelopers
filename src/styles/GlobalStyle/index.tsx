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
    background-color: ${theme.color.black};
  }
`;
