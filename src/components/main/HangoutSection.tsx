import { css, Theme } from '@emotion/react';

import Layout from 'components/common/Layout';

function HangoutSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <div css={titleWrapperStyle}>
            <h1>개발자들에서 노는 방법</h1>
            <h2>
              개발자들에서는 공부는 물론, 선후배간 친목도모를 위해
              <br />
              다양한 프로그램을 통해 어쩌구 저쩌구
            </h2>
          </div>
          <div>content</div>
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
`;
