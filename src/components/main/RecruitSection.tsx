import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import Layout from 'components/common/Layout';
import RecruitProblemArticle from 'components/main/RecruitProblemArticle';

function RecruitSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <div css={rightSectionStyle}>
            <RecruitProblemArticle>
              어떻게 공부해야하는지 모르겠어요
            </RecruitProblemArticle>
            <RecruitProblemArticle top="100px" left="30%" scrollStartPos={200}>
              제 능력이 부족하다고 생각해요
            </RecruitProblemArticle>
            <RecruitProblemArticle top="200px" left="14%" scrollStartPos={300}>
              프로젝트 경험이 없어요
            </RecruitProblemArticle>
          </div>
          <div css={leftSectionStyle}>
            <motion.h1>괜찮아요</motion.h1>
            <motion.h2>개발자들에서 도와드릴게요</motion.h2>
            <motion.button css={applyBtnStyle}>
              지금 바로 지원하러가기
            </motion.button>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default RecruitSection;

const sectionStyle = css`
  margin-top: 200px;
  margin-bottom: 200px;
`;

const wrapperStyle = css`
  width: 100%;
  padding-top: 100px;
  display: flex;
`;

const leftSectionStyle = (theme: Theme) => css`
  width: 45%;
  margin-top: auto;

  & h1 {
    font-size: 3rem;
  }

  & h2 {
    font-size: 2rem;
    font-weight: ${theme.fontWeight.light};
  }
`;

const applyBtnStyle = (theme: Theme) => css`
  margin-top: 50px;
  padding: 18px 26px;
  background-color: ${theme.color.brand};
  border-radius: 24px;
  font-size: 1.25rem;
`;

const rightSectionStyle = css`
  position: relative;
  width: 55%;
  height: 500px;
`;
