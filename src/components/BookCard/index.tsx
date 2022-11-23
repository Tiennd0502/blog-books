import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';

import { Book } from '@interfaces/book';
import imageLoader from '@helpers/image';
import BOOKS from '@constants/books';

import styles from './styles.module.css';

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <Link href={`${BOOKS.DETAIL_URL}/${book.id}`}>
      <Box className={styles.book} role="link">
        <Box className={styles.bookImgThumb}>
          <Image
            src={book.image}
            alt={book.title}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${book.image}&w=16&q=1`}
            layout="responsive"
            objectFit="cover"
            loading="lazy"
            width="300"
            height="500"
            loader={imageLoader}
          />
        </Box>
        <Box>
          <Text variant="title" className={styles.bookTitle}>
            {book.title}
          </Text>
          <Text variant="author">by {book.author}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default BookCard;
