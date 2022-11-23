import React, { useEffect, useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Router from 'next/router';
import dynamic from 'next/dynamic';

import Loading from '@components/Loading';

type Props = {
  children: React.ReactNode;
};

const Header = dynamic(() => import('@components/layouts/Header'), {
  suspense: true,
});
const Footer = dynamic(() => import('@components/layouts/Footer'), {
  suspense: true,
});

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Box position="relative">
      {isLoading && <Loading />}
      <Header />
      <Container padding="16px" backgroundColor="white">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
