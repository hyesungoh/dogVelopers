import styled from '@emotion/styled';
import { motion } from 'framer-motion';

function Home() {
  return <Div whileHover={{ scale: 1.2 }}>asdfasdf</Div>;
}

export default Home;

const Div = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.black};
`;
