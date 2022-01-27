import { css, Theme } from '@emotion/react';

import Layout from 'components/common/Layout';

function RecruitSection() {
  return (
    <section css={sectionStyle}>
      <Layout>
        <div>
          <h1>recruit</h1>
        </div>
      </Layout>
    </section>
  );
}

export default RecruitSection;

const sectionStyle = css`
  margin-top: 200px;
`;
