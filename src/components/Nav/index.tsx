import { css, Theme } from '@emotion/react';
import Link from 'next/link';

import Layout from 'components/common/Layout';

function Nav() {
  return (
    <nav css={navStyle}>
      <Layout>
        <div css={wrapperStyle}>
          <Link href="/" passHref>
            <h1 css={logoAnchorStyle}>DogVelopers</h1>
          </Link>
          <div css={rightWrapperStyle}>
            <a>program</a>
            <a>team</a>
            <button css={joinBtnStyle}>JOIN US</button>
          </div>
        </div>
      </Layout>
    </nav>
  );
}

export default Nav;

const navStyle = css`
  position: sticky;
  top: 0;
  height: 80px;
  z-index: 2;
`;

const wrapperStyle = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoAnchorStyle = css`
  cursor: pointer;
  font-size: 1.5rem;
`;

const rightWrapperStyle = css`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const joinBtnStyle = (theme: Theme) => css`
  padding: 8px 20px;
  background-color: ${theme.color.brand};
  border-radius: 22px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
