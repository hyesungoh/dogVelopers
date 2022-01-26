import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import Layout from 'components/common/Layout';

const recrutNotionUrl =
  'https://gratis-sting-e5a.notion.site/6-Recruiting-cee2f41b841e41d48d3a6cf12ad1a753';

function Nav() {
  const { scrollY } = useViewportScroll();
  const bgOpacityByScroll = useTransform(scrollY, [0, 500, 750], [0, 0, 1]);

  return (
    <nav css={navStyle}>
      <motion.div
        css={backgroundStyle}
        style={{ opacity: bgOpacityByScroll }}
      ></motion.div>
      <Layout>
        <div css={wrapperStyle}>
          <Link href="/" passHref>
            <h1 css={logoAnchorStyle}>DogVelopers</h1>
          </Link>
          <div css={rightWrapperStyle}>
            {/* <a>program</a>
            <a>team</a> */}
            <Link href={recrutNotionUrl} passHref>
              <a target="_blank" css={joinBtnStyle}>
                JOIN US
              </a>
            </Link>
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

const backgroundStyle = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.black900};
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
