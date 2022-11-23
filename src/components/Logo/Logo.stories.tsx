import React from 'react';
import Storybook from '@storybook/react';

import IMAGES from '@constants/images';
import Logo from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Storybook.ComponentMeta<typeof Logo>;

const Template: Storybook.ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: IMAGES.LOGO_URL,
  alt: IMAGES.LOGO_ALT,
};
