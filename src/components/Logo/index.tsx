import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

import IMAGES from '@constants/images';
import imageLoader from '@helpers/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Box cursor="pointer">
        <Image
          src={IMAGES.LOGO_URL}
          alt={IMAGES.LOGO_ALT}
          layout="responsive"
          width="852"
          height="213"
          placeholder="blur"
          blurDataURL={`/_next/image?url=${IMAGES.LOGO_URL}&w=16&q=1`}
          loader={imageLoader}
          priority
          sizes="50vw"
        />
      </Box>
    </Link>
  );
};

export default Logo;
