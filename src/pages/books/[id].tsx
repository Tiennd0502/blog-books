import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import {
  Box,
  Heading,
  Text,
  List,
  Flex,
  ListItem,
  Button,
} from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';

import MainLayout from '@components/layouts/MainLayout';
import Loading from '@components/Loading';
import SEO from '@components/SEO';

import { Book } from '@interfaces/book';
import ENDPOINT from '@constants/apis';
import imageLoader from '@helpers/image';
import { getById, getAll, update } from '@services/mockApi';

interface BookPathParams extends ParsedUrlQuery {
  id: string;
}

interface BookPaths {
  params: BookPathParams;
}

type Props = {
  book: Book;
  error?: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: books } = await getAll<Book[]>(ENDPOINT.BOOK_URL);

  let paths: BookPaths[] = [];

  if (books) {
    paths = books.map((book) => {
      return {
        params: { id: book.id },
      };
    });
  }

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as BookPathParams;
  const { data: book, error } = await getById<Book>(ENDPOINT.BOOK_URL, id);

  if (error) {
    return {
      props: {
        error,
      },
    };
  }

  return {
    props: {
      book,
    },
    revalidate: 100,
  };
};

const BookDetail: NextPage<Props> = ({ book, error }) => {
  const { id, image, title, liked, summary, author, contributors } = book;
  const router = useRouter();
  const [statusLike, setStatusLike] = useState(liked);
  const [isLoading, setIsLoading] = useState(false);

  if (router.isFallback) {
    return <Loading />;
  }

  if (error) {
    // TODO: Define component for display error
    return (
      <MainLayout>
        <Heading m="0 auto" color="red.500" textAlign="center">
          {error}
        </Heading>
      </MainLayout>
    );
  }

  const handleChangeStatus = async (like: boolean) => {
    setIsLoading(true);
    const newBook = {
      ...book,
      liked: like,
    };
    await update<Book>(ENDPOINT.BOOK_URL, id, newBook);
    setStatusLike(like);
    setIsLoading(false);
  };

  return (
    <>
      <SEO
        title={title}
        siteTitle="New Releases · 49th Shelf"
        description={`${title}, ${author}, New Poetry · New Releases · 49th Shelf`}
      />
      <MainLayout>
        <Flex gap="10">
          <Box minWidth="30%">
            <Image
              src={image}
              alt={title}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
              layout="responsive"
              objectFit="cover"
              width="402"
              height="600"
              loader={imageLoader}
            />
            {isLoading && <Loading />}
            <Button
              textTransform="uppercase"
              display="block"
              w="100%"
              my="20px"
              bg={statusLike ? 'orange.500' : 'blue.700'}
              variant={statusLike ? 'warning' : ''}
              onClick={() => handleChangeStatus(!statusLike)}
            >
              like{statusLike ? 'd' : ''}
            </Button>
          </Box>
          <Box width="70%">
            <Heading mb="34px">{title}</Heading>
            <Text fontWeight="bold">Summary:</Text>
            <Text>{summary}</Text>
            <Text fontWeight="bold" display="inline">
              Author:&nbsp;
            </Text>
            <Text display="inline">{author}</Text>
            <br />
            <Text fontWeight="bold">Contributors:</Text>
            <List spacing={2} pl="40px">
              {contributors?.map((contributor) => (
                <ListItem key={contributor}>
                  <Text>{contributor}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </MainLayout>
    </>
  );
};

export default BookDetail;
