import { css, Theme } from '@emotion/react';

import Layout from 'components/common/Layout';

function Introduce() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <h1 css={titleStyle}>
            당신의 꿈에 날개를 달아줄, <strong>개발자들</strong>
          </h1>
          <p css={dscStyle}>
            개발자들은 성공회대학교 개발 동아리 중{' '}
            <mark>유일한 정식 동아리</mark>입니다.
          </p>
        </div>
      </Layout>
    </section>
  );
}

export default Introduce;

const sectionStyle = css`
  position: relative;
  margin-top: 180px;
`;

const wrapperStyle = css`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const titleStyle = (theme: Theme) => css`
  font-size: 3rem;
  font-weight: ${theme.fontWeight.light};
`;

const dscStyle = css`
  margin-top: 12px;
  font-size: 1.25rem;
`;
