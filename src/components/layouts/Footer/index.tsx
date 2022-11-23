import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="blue.700" data-testid="footer" color="light">
      <Container padding="14px 14px 22px" textAlign="center">
        <Text>
          OpenSource Textbook empowers and connects authors and readers through
          open access to a global reading and publishing platform.
        </Text>
        <Text>Vancouver Community College, Vancouver, B.C., Canada</Text>
        <Text>&copy; 2022 by NIKEA</Text>
      </Container>
    </Box>
  );
};

export default Footer;
