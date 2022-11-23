import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Heading } from '@chakra-ui/react';

import MainLayout from '@components/layouts/MainLayout';
import BookList from '@components/BookList';
import Pagination from '@components/Pagination';
import Loading from '@components/Loading';
import SEO from '@components/SEO';

import BOOKS from '@constants/books';
import ENDPOINT from '@constants/apis';
import { Book } from '@interfaces/book';
import { getAll } from '@services/mockApi';

type Props = {
  error?: string;
  books: Book[];
  currentPage: number;
};

type BookPathParams = {
  pageNumber: string;
};

interface PagePaths {
  params: BookPathParams;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAll<Book[]>(ENDPOINT.BOOK_URL);

  const paths: PagePaths[] = [];
  if (data) {
    const totalPage = Math.ceil(data.length / BOOKS.BOOK_LIMIT);

    for (let i = 1; i <= totalPage; i += 1) {
      paths.push({
        params: {
          pageNumber: `${i}`,
        },
      });
    }
  }

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageNumber } = params as BookPathParams;

  const { data, error } = await getAll<Book[]>(ENDPOINT.BOOK_URL);

  if (error) {
    return {
      props: {
        error,
      },
    };
  }

  return {
    props: {
      books: data,
      currentPage: +pageNumber,
    },
    revalidate: 10,
  };
};

const Home: NextPage<Props, {}> = ({ books, error, currentPage }) => {
  const router = useRouter();
  const keywords = (router.query.search as string) || '';

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

  const bookList = books.filter(
    ({ title, author }) =>
      title.toLocaleLowerCase().includes(keywords.toLocaleLowerCase()) ||
      author.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())
  );
  const newBooks = bookList.slice(
    (currentPage - 1) * BOOKS.BOOK_LIMIT,
    currentPage * BOOKS.BOOK_LIMIT
  );

  const currentTotalPage = Math.ceil(bookList.length / BOOKS.BOOK_LIMIT);

  const handleChangePage = (page: number) => {
    router.push(`/?page=${page}${keywords ? `&search=${keywords}` : ''}`);
  };

  return (
    <>
      <SEO
        title="New Poetry"
        siteTitle="New Releases · 49th Shelf"
        description="New Poetry · New Releases · 49th Shelf"
      />
      <MainLayout>
        <Heading mb="46px">New Poetry</Heading>
        <BookList books={newBooks} />

        {bookList.length > BOOKS.BOOK_LIMIT && (
          <Pagination
            count={currentTotalPage}
            currentPage={currentPage}
            onChange={handleChangePage}
          />
        )}
      </MainLayout>
    </>
  );
};

export default Home;
