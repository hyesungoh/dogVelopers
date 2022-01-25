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
  position: inherit;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  padding: 0 1.375rem;
  margin: 0 auto;
  overflow-x: hidden;
`;
