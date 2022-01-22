import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

function Home() {
  return <div css={dCss}>asdfasdf</div>;
}

export default Home;

const dCss = (theme: Theme) => css`
  width: 100px;
  height: 100px;
  background-color: red;
  color: ${theme.color.black};
`;
