import React from 'react';
import Storybook from '@storybook/react';

import Footer from './index';

import '@styles/main.css';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Storybook.ComponentMeta<typeof Footer>;

const Template: Storybook.ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
