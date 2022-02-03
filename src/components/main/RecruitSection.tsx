import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import Layout from 'components/common/Layout';
import RecruitProblemArticle from 'components/main/RecruitProblemArticle';
import { recrutNotionUrl } from 'constants/recruit';
import { inViewRightInVariants, inViewGrowVariants } from 'constants/motions';

function RecruitSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <div css={problemSectionStyle}>
            <RecruitProblemArticle>
              어떻게 공부해야하는지 모르겠어요 📚
            </RecruitProblemArticle>
            <RecruitProblemArticle top="100px" left="30%" scrollStartPos={200}>
              😭 제 능력이 부족하다고 생각해요
            </RecruitProblemArticle>
            <RecruitProblemArticle top="200px" left="14%" scrollStartPos={300}>
              프로젝트 경험이 없어요 💼 💼
            </RecruitProblemArticle>
          </div>

          <div css={applySectionStyle}>
            <motion.h1
              initial="initial"
              whileInView="whileInView"
              variants={inViewRightInVariants}
              viewport={{ once: false, margin: '-100px' }}
            >
              괜찮아요
            </motion.h1>
            <motion.h2
              initial="initial"
              whileInView="whileInView"
              variants={inViewRightInVariants}
              viewport={{ once: false, margin: '-100px' }}
            >
              개발자들에서 도와드릴게요
            </motion.h2>

            <Link href={recrutNotionUrl} passHref>
              <motion.a
                target="_blank"
                css={applyAnchorStyle}
                initial="initial"
                whileInView="whileInView"
                variants={inViewGrowVariants}
                viewport={{ once: false, margin: '-100px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
              >
                지금 바로 지원하러가기
              </motion.a>
            </Link>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default RecruitSection;

const sectionStyle = css`
  margin-top: 100px;
  margin-bottom: 200px;
`;

const wrapperStyle = (theme: Theme) => css`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 10px;
  display: flex;

  ${theme.mediaQuery.mobile} {
    flex-direction: column;
  }
`;

const applySectionStyle = (theme: Theme) => css`
  width: 45%;
  margin-top: auto;
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 3rem;
  }

  & h2 {
    font-size: 2rem;
    font-weight: ${theme.fontWeight.light};
  }

  ${theme.mediaQuery.mobile} {
    width: 100%;
    margin-top: 0;
  }
`;

const applyAnchorStyle = (theme: Theme) => css`
  align-self: flex-start;
  margin-top: 50px;
  padding: 18px 26px;
  background-color: ${theme.color.brand};
  border-radius: 24px;
  font-size: 1.25rem;

  ${theme.mediaQuery.mobile} {
    align-self: center;
  }
`;

const problemSectionStyle = (theme: Theme) => css`
  position: relative;
  width: 55%;
  height: 500px;

  ${theme.mediaQuery.mobile} {
    width: 100%;
    height: 400px;
  }
`;
