import { css, Theme } from '@emotion/react';

import Layout from 'components/common/Layout';
import Background from 'components/main/Background';

function IntroduceSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <h1 css={titleStyle}>
            당신의 꿈에 날개를 달아줄, <strong>개발자들</strong>
          </h1>
          <p css={dscStyle}>
            개발자들은 성공회대학교 개발 동아리 중
            <strong> 유일한 정식 동아리</strong>입니다.
          </p>
        </div>
      </Layout>

      <Background />
    </section>
  );
}

export default IntroduceSection;

const sectionStyle = css``;

const wrapperStyle = css`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const titleStyle = (theme: Theme) => css`
  font-size: 4rem;
  font-weight: ${theme.fontWeight.light};
`;

const dscStyle = (theme: Theme) => css`
  margin-top: 12px;
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.light};
`;
