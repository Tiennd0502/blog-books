import React from 'react';
import Link from 'next/link';

import { IconButton as ChakraIconButton } from '@chakra-ui/react';

import { IconType } from 'react-icons';

type Props = {
  href: string;
  Icon: IconType;
  ariaLabel: string;
};

const IconButton: React.FC<Props> = ({ href, Icon, ariaLabel }) => {
  return (
    <Link href={href}>
      <ChakraIconButton
        mr="8px"
        variant="unstyled"
        aria-label={ariaLabel}
        icon={<Icon fontSize="36px" />}
      />
    </Link>
  );
};

export default IconButton;
