import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import Layout from 'components/common/Layout';

function NotFound() {
  return (
    <main>
      <Layout>
        <div css={wrapperStyle}>
          <h1 css={h1Style}>죄송합니다.</h1>
          <h2 css={h2Style}>해당 페이지를 찾을 수 없습니다.</h2>

          <span css={inquiryStyle}>문의 : haesungoh414@gmail.com</span>
          <Link href="/" passHref>
            <button css={btnStyle}>메인 페이지로 가기</button>
          </Link>
        </div>
      </Layout>
    </main>
  );
}

export default NotFound;

const wrapperStyle = css`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const h1Style = (theme: Theme) => css`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.light};
`;

const h2Style = css`
  font-size: 2rem;
`;

const inquiryStyle = (theme: Theme) => css`
  margin: 100px 0 40px 0;
  font-weight: ${theme.fontWeight.light};
`;

const btnStyle = (theme: Theme) => css`
  width: 200px;
  padding: 22px 30px;
  background-color: ${theme.color.brand};
  text-align: center;
  border-radius: 14px;

  transition: transform 0.5s;

  &:hover,
  &:active {
    transform: scale(1.05);
  }
`;
