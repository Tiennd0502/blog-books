import React from 'react';
import Storybook from '@storybook/react';

import { BOOK_ITEM } from '@__mocks__/constants/books';
import BookCard from './index';

import '@styles/main.css';

export default {
  title: 'Components/BookCard',
  component: BookCard,
} as Storybook.ComponentMeta<typeof BookCard>;

const Template: Storybook.ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  book: BOOK_ITEM,
};
