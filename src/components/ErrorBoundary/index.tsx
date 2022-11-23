import React, { Component, ErrorInfo } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

type State = {
  hasError: boolean;
};

type Props = {
  children: React.ReactNode;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px="10px"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <h2>Oops !!!</h2>
            <p>Something went wrong!. Please try again later!</p>
            <br />
            <NextLink href="/">
              <Link color="primary">Back to Home page</Link>
            </NextLink>
          </Flex>
        </Box>
      );
    }

    return children;
  }
}
