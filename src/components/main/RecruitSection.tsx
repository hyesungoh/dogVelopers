import { css, Theme, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

import Layout from 'components/common/Layout';
import RecruitProblemArticle from 'components/main/RecruitProblemArticle';

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

const applyBtnAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(2deg);
  }
  70% {
    transform: rotate(-1deg);
  }
  80% {
    transform: rotate(1.5deg);
  }
  90% {
    transform: rotate(-2.5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const applyBtnStyle = (theme: Theme) => css`
  align-self: flex-start;
  margin-top: 50px;
  padding: 18px 26px;
  background-color: ${theme.color.brand};
  border-radius: 24px;
  font-size: 1.25rem;
  animation: ${applyBtnAnimation} 2s infinite;

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
