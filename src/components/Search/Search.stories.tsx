import React from 'react';
import Storybook from '@storybook/react';

import Search from './index';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    onSubmit: { action: 'onClick' },
  },
} as Storybook.ComponentMeta<typeof Search>;

const Template: Storybook.ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search by title, author, or keyword',
};
