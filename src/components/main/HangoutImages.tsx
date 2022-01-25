import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';
import { inViewRightInVariants } from 'constants/motions';

function HangoutImages() {
  return (
    <motion.div
      css={wrapperStyle}
      initial="initial"
      whileInView="whileInView"
      variants={inViewRightInVariants}
      viewport={{ once: false, margin: '-150px' }}
    >
      <article css={articleStyle}>
        <span>전체 모임</span>
        <div css={imageWrapperStyle}>
          <Image
            css={imageStyle}
            src="/meeting1.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
          <Image
            css={imageStyle}
            src="/meeting2.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
          <Image
            css={imageStyle}
            src="/meeting3.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
        </div>
      </article>

      <article css={articleStyle}>
        <span>MT</span>
        <div css={imageWrapperStyle}>
          <Image
            css={imageStyle}
            className="wide"
            src="/mt1.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
          <Image
            css={imageStyle}
            src="/mt2.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
          <Image
            css={imageStyle}
            src="/mt3.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
        </div>
      </article>

      <article css={articleStyle}>
        <span>회식</span>
        <div css={imageWrapperStyle}>
          <Image
            css={imageStyle}
            src="/together1.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
          <Image
            css={imageStyle}
            src="/together2.jpeg"
            alt="전체 모임"
            width="500"
            height="500"
          />
        </div>
      </article>
    </motion.div>
  );
}

export default HangoutImages;

const wrapperStyle = (theme: Theme) => css`
  width: 100%;
  height: 360px;
  margin-top: 80px;

  display: flex;
  justify-content: space-evenly;
  gap: 12px;

  ${theme.mediaQuery.mobile} {
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const articleStyle = (theme: Theme) => css`
  width: 30%;
  height: 100%;

  & > span {
    height: 10%;
    font-size: 1.25rem;
    opacity: 0.8;
  }

  ${theme.mediaQuery.mobile} {
    flex-shrink: 0;
    width: 80%;
  }
`;

const imageWrapperStyle = css`
  display: grid;
  width: 100%;
  height: 80%;
  margin-top: 14px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 6px;

  & span:first-of-type {
    grid-column: 1 / span 2;
  }

  & span:first-of-type:nth-last-of-type(2),
  & span:first-of-type:nth-last-of-type(2) ~ span {
    grid-column: 1 / span 2;
  }
`;

const imageStyle = css`
  object-fit: cover;
  border-radius: 8px;
`;
