import React from 'react';
import Storybook from '@storybook/react';

import Loading from './index';

export default {
  title: 'Components/Loading',
  component: Loading,
};

const Template: Storybook.ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const DefaultLoading = Template.bind({});
