import { ReactNode } from 'react';
import { css } from '@emotion/react';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <div css={wrapperStyle}>{children}</div>;
}

export default Layout;

const wrapperStyle = css`
  width: 100%;
  max-width: 1024px;
  padding: 0 22px;
  margin: 0 auto;
`;
