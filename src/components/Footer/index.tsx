import { css, Theme } from '@emotion/react';
import Layout from 'components/common/Layout';

function Footer() {
  return (
    <footer css={footerStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <div css={leftStyle}>
            <h1 css={titleStyle}>DogVelopers</h1>
            <p css={copyrightStyle}>DogVelopers. All rights reserved.</p>
          </div>
          <div css={rightStyle}>
            <a href="mailto:mail.dogvelopers@gmail.com">Email</a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;

const footerStyle = (theme: Theme) => css`
  background-color: ${theme.color.black500};
`;

const wrapperStyle = css`
  width: 100%;
  height: 200px;
  padding: 30px 0;

  display: flex;
`;

const leftStyle = css`
  width: 50%;
  height: 100%;
`;

const titleStyle = css`
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

const copyrightStyle = (theme: Theme) => css`
  font-size: 0.75rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.5;
`;

const rightStyle = css`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  width: 50%;
  height: 100%;

  & a:hover {
    text-decoration: underline;
  }
`;
