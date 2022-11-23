import React from 'react';
import Storybook from '@storybook/react';

import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Storybook.ComponentMeta<typeof Header>;

const Template: Storybook.ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
