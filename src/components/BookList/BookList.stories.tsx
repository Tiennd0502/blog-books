import React from 'react';
import Storybook from '@storybook/react';

import { BOOK_LIST } from '@__mocks__/constants/books';
import BookList from './index';

import '@styles/main.css';

export default {
  title: 'Components/BookList',
  component: BookList,
} as Storybook.ComponentMeta<typeof BookList>;

const Template: Storybook.ComponentStory<typeof BookList> = (args) => (
  <BookList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  books: BOOK_LIST,
};
