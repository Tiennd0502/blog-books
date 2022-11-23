import '@styles/main.css';
import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '@themes/chakra';

import ErrorBoundary from '@components/ErrorBoundary';
import Loading from '@components/Loading';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default MyApp;
