import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';

import { inViewGrowVariants } from 'constants/motions';

interface IRecordImageProps {
  imageSrc: string;
}

function RecordImage({ imageSrc }: IRecordImageProps) {
  return (
    <motion.div
      css={imageStyle}
      initial="initial"
      whileInView="whileInView"
      variants={inViewGrowVariants}
      viewport={{ once: false, margin: '-100px 1000px -100px 1000px' }}
    >
      <Image src={imageSrc} alt="study" layout="fill" objectFit="cover" />
    </motion.div>
  );
}

export default RecordImage;

const imageStyle = (theme: Theme) => css`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 400px;
  height: 80%;
  border-radius: 20px;

  ${theme.mediaQuery.mobile} {
    width: 300px;
    height: 90%;
  }
`;
