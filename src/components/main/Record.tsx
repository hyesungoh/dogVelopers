import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Layout from 'components/common/Layout';
import RecordArticle from 'components/main/RecordArticle';
import { getCurrentYear } from 'utils/date';
import { inViewFadeInUpVariants } from 'constants/motions';

const articles = [
  { title: '탄생한지', value: `${getCurrentYear() - 2016}년` },
  { title: '누적 멤버 수', value: '50명 +' },
  { title: '진행 스터디', value: '2N개' },
  { title: '진행 프로젝트', value: '2N개' },
];

function Record() {
  return (
    <motion.section
      css={sectionStyle}
      initial="initial"
      whileInView="whileInView"
      variants={inViewFadeInUpVariants}
      viewport={{ once: false, margin: '-300px' }}
    >
      <Layout>
        <div css={wrapperStyle}>
          <aside css={asideStyle}>
            {articles.map((article) => (
              <RecordArticle key={article.title} {...article} />
            ))}
          </aside>

          <div css={contentWrapperStyle}>
            <h1>스터디부터 프로젝트까지</h1>
            <h2>혼자서는 힘든 경험을 제공합니다.</h2>

            <div css={imageWrapperStyle}>
              <div css={imageStyle}>
                <Image
                  src="/study1.jpeg"
                  alt="study1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div css={imageStyle}>
                <Image
                  src="/study2.jpeg"
                  alt="study1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </motion.section>
  );
}

export default Record;

const sectionStyle = css`
  width: 100%;
  margin-top: 120px;
`;

const wrapperStyle = css`
  width: 100%;
  height: 500px;
  display: flex;
`;

const asideStyle = css`
  width: 16rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const contentWrapperStyle = (theme: Theme) => css`
  width: 500px;
  height: 100%;
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
`;

const imageWrapperStyle = css`
  margin-top: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;

  overflow-y: hidden;
  overflow-x: scroll;
`;

const imageStyle = css`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 400px;
  height: 80%;
  border-radius: 20px;
`;
