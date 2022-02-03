import { css, Theme } from '@emotion/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import { inViewGrowVariants } from 'constants/motions';

interface IRecruitProblemArticle {
  children: string;
  top?: string;
  left?: string;
  scrollStartPos?: number;
}

function RecruitProblemArticle({
  children,
  top = '0',
  left = '0',
  scrollStartPos = 100,
}: IRecruitProblemArticle) {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0.6, 1], [scrollStartPos, -20]);

  return (
    <motion.article
      css={[articleStyle, { top, left }]}
      style={{ y }}
      variants={inViewGrowVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, margin: '-100px' }}
    >
      {children}
    </motion.article>
  );
}

export default RecruitProblemArticle;

const articleStyle = (theme: Theme) => css`
  position: absolute;
  font-size: 1.25rem;
  padding: 18px 26px;
  background-color: ${theme.color.gray};
  color: ${theme.color.white};
  border-radius: 24px;
`;
