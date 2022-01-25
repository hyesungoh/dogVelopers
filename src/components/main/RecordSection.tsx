import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import Layout from 'components/common/Layout';
import RecordArticle from 'components/main/RecordArticle';
import RecordImage from 'components/main/RecordImage';
import { getCurrentYear } from 'utils/date';
import { inViewFadeInUpVariants } from 'constants/motions';

const articles = [
  { title: '탄생한지', value: `${getCurrentYear() - 2016}년` },
  { title: '누적 멤버 수', value: '60명 +' },
  { title: '진행 스터디', value: '3N개' },
  { title: '진행 프로젝트', value: '2N개' },
];

const images = ['/study1.jpeg', '/study2.jpeg'];

function RecordSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <aside css={asideStyle}>
            {articles.map((article) => (
              <RecordArticle key={article.title} {...article} />
            ))}
          </aside>

          <div css={contentWrapperStyle}>
            <div>
              <motion.h1
                initial="initial"
                whileInView="whileInView"
                variants={inViewFadeInUpVariants}
                viewport={{ once: false, margin: '-100px' }}
              >
                스터디부터 프로젝트까지
              </motion.h1>
              <motion.h2
                initial="initial"
                whileInView="whileInView"
                variants={inViewFadeInUpVariants}
                viewport={{ once: false, margin: '-100px' }}
              >
                혼자서는 힘든 경험을 제공합니다.
              </motion.h2>
            </div>

            <div css={imageWrapperStyle}>
              {images.map((imageSrc, index) => (
                <RecordImage key={index} imageSrc={imageSrc} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default RecordSection;

const sectionStyle = css`
  position: relative;
  width: 100%;
  height: 500px;
  margin-top: 120px;
`;

const wrapperStyle = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  display: flex;

  ${theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

const asideStyle = (theme: Theme) => css`
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;

  ${theme.mediaQuery.mobile} {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const contentWrapperStyle = (theme: Theme) => css`
  width: 500px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & h1,
  & h2 {
    font-size: 3rem;
  }

  & h2 {
    font-weight: ${theme.fontWeight.light};
  }

  ${theme.mediaQuery.mobile} {
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
  }
`;

const imageWrapperStyle = (theme: Theme) => css`
  margin-top: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;

  overflow-y: hidden;
  overflow-x: scroll;

  ${theme.mediaQuery.mobile} {
    height: 180px;
  }
`;
