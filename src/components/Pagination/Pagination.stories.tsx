import React from 'react';
import Storybook from '@storybook/react';

import Pagination from './index';

import '@styles/main.css';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Storybook.ComponentMeta<typeof Pagination>;

const Template: Storybook.ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 6,
  onChange: (page: number) => {
    console.log('Change page', page);
  },
};
