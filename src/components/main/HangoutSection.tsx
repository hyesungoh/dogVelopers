import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import Layout from 'components/common/Layout';
import HangoutImages from 'components/main/HangoutImages';
import { inViewFadeInUpVariants } from 'constants/motions';

function HangoutSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <div css={titleWrapperStyle}>
            <motion.h1
              initial="initial"
              whileInView="whileInView"
              variants={inViewFadeInUpVariants}
              viewport={{ once: false, margin: '-100px' }}
            >
              개발자들에서 노는 방법
            </motion.h1>
            <motion.h2
              initial="initial"
              whileInView="whileInView"
              variants={inViewFadeInUpVariants}
              viewport={{ once: false, margin: '-100px' }}
            >
              개발자들에서는 공부는 물론, 친목도모를 위해
              <br />
              다양한 활동을 하고 있습니다 :D
            </motion.h2>
          </div>
          <HangoutImages />
        </div>
      </Layout>
    </section>
  );
}

export default HangoutSection;

const sectionStyle = css`
  margin-top: 200px;
`;

const wrapperStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const titleWrapperStyle = (theme: Theme) => css`
  width: 100%;
  text-align: center;

  & h1 {
    font-size: 3rem;
  }

  & h2 {
    font-size: 1.5rem;
    margin-top: 24px;
    font-weight: ${theme.fontWeight.light};
  }

  ${theme.mediaQuery.mobile} {
    & h1 {
      font-size: 2.5rem;
    }

    & h2 {
      font-size: 1.25rem;
    }
  }
`;
