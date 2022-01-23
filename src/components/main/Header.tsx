import { css, Theme } from '@emotion/react';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

function Header() {
  const { scrollY } = useViewportScroll();
  const xMovement = useTransform(scrollY, [0, 800], [-1000, 0]);
  const reverseXMovement = useTransform(scrollY, [0, 800], [20, -1000]);

  const springY = useSpring(xMovement, { stiffness: 500, damping: 100 });
  const springReverseY = useSpring(reverseXMovement, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <header css={headerStyle}>
      <div css={textWrapperStyle}>
        <motion.div style={{ x: springY }}>
          개발자들 - DogVelopers - 개발 동아리 - 개발자들 - DogVelopers - 개발
          동아리
        </motion.div>
        <motion.div style={{ x: springReverseY }}>
          개발자들 - DogVelopers - 개발 동아리 - 개발자들 - DogVelopers - 개발
          동아리
        </motion.div>
      </div>
    </header>
  );
}

export default Header;

const headerStyle = (theme: Theme) => css`
  position: relative;
  height: 800px;

  font-weight: ${theme.fontWeight.bold};
  font-size: 8rem;
  white-space: nowrap;
  line-height: 120%;
`;

const textWrapperStyle = css`
  position: sticky;
  top: 200px;
`;
