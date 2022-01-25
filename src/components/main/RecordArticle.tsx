import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { inViewLeftInVariants } from 'constants/motions';

interface IRecordArticle {
  title: string;
  value: string;
}

function RecordArticle({ title, value }: IRecordArticle) {
  return (
    <motion.article
      css={articleStyle}
      initial="initial"
      whileInView="whileInView"
      variants={inViewLeftInVariants}
      viewport={{
        once: false,
        margin: '-100px 0px -100px 0px',
      }}
    >
      <span css={titleStyle}>{title}</span>
      <span css={valueStyle}>{value}</span>
    </motion.article>
  );
}

export default RecordArticle;

const articleStyle = css`
  display: flex;
  flex-direction: column;
`;

const titleStyle = css``;

const valueStyle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.5rem;
`;
