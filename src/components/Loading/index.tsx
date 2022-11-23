import React from 'react';
import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react';

const Loading = ({ size = 'xl', ...props }: SpinnerProps) => {
  return (
    <Flex
      position="fixed"
      w="100%"
      h="100%"
      top="0"
      left="0"
      bg="blackAlpha.500"
      alignItems="center"
      justifyContent="center"
      zIndex="999"
    >
      <Spinner color="orange.500" size={size} {...props} />
    </Flex>
  );
};

export default Loading;
