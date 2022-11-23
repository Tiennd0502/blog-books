import * as NextImage from 'next/image';
import { ChakraProvider } from '@chakra-ui/react';
import ChakraTheme from '@themes/chakra';

const OriginalNextImage = NextImage.default;
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={ChakraTheme}>
      <Story />
    </ChakraProvider>
  ),
];


Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
