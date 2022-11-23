import React from 'react';
import { useRouter } from 'next/router';
import { Box, Spacer, Container } from '@chakra-ui/react';

import Logo from '@components/Logo';
import Search from '@components/Search';

const Header: React.FC = () => {
  const {
    query: { page = '1' },
    push,
  } = useRouter();

  const handleSearchInputChange = (keywords: string) => {
    push(`/?page=${page}${keywords ? `&search=${keywords}` : ''}`);
  };

  return (
    <Box as="header" bg="blue.700" height="auto">
      <Container
        display="flex"
        alignItems="center"
        position="relative"
        px="15px"
      >
        <Box w="45%">
          <Logo />
        </Box>
        <Spacer />
        <Box w="30%" mr="40px">
          <Search
            placeholder="Search by title, author, or keyword"
            onSubmit={handleSearchInputChange}
          />
        </Box>
        <Box
          m="0"
          p="0"
          position="absolute"
          fontSize="30px"
          bottom="0"
          left="35%"
          color="light"
        >
          Know more. Do more.
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
