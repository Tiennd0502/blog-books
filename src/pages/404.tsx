import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BiChevronsLeft } from 'react-icons/bi';

import MESSAGES from '@constants/messages';

const Page404 = () => (
  <Box
    minH="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px="10px"
  >
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Text variant="error" size="medium">
        {MESSAGES.NOT_FOUND_PAGE}
      </Text>
      <Link href="/">
        <Text
          display="flex"
          alignItems="center"
          color="blue.500"
          cursor="pointer"
          textDecoration="underline"
          _hover={{ color: 'orange.500' }}
        >
          <BiChevronsLeft fontSize="30px" />
          {MESSAGES.BACK_TO_HOME}
        </Text>
      </Link>
    </Flex>
  </Box>
);
export default Page404;
