import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';
import Container from './components/container';
import Button from './components/button';
import Input from './components/input';
import Text from './components/text';

const overrides = {
  components: {
    Container,
    Button,
    Input,
    Text,
  },
  colors,
  ...fonts,
};

export default extendTheme(overrides);
