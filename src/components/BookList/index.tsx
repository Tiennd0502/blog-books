import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { Book } from '@interfaces/book';
import BookCard from '@components/BookCard';

type Props = {
  books: Book[];
};

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <SimpleGrid
      role="list"
      my="30px"
      columns={{ md: 3, lg: 4, xl: 5 }}
      spacing="30px"
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  );
};

export default BookList;
