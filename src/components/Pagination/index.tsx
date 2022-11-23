import React, { memo, useMemo } from 'react';
import { Button, Flex, Box, Text, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import styles from './styles.module.css';

type Props = {
  count: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ count, currentPage, onChange }) => {
  const PageList = useMemo(() => {
    const pageList: React.ReactNode[] = [];

    for (let i = 1; i <= count; i += 1) {
      pageList.push(
        <Button
          key={i}
          role="button"
          variant="unstyled"
          color={currentPage === i ? 'orange.500' : 'black'}
          className={styles.paginationItem}
          onClick={() => onChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pageList;
  }, [count, currentPage, onChange]);

  return (
    <Flex
      role="list"
      align="center"
      width="100%"
      borderTopWidth="1px"
      borderColor="grey.500"
    >
      <Text>
        Page {currentPage} of {count}
      </Text>
      <Spacer />
      <Box>
        <Button
          className={styles.paginationItem}
          variant="unstyled"
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
        >
          <ChevronLeftIcon />
          Previous
        </Button>

        {PageList}
        <Button
          className={styles.paginationItem}
          ml="8px"
          variant="unstyled"
          disabled={currentPage === count}
          onClick={() => onChange(currentPage + 1)}
        >
          Next <ChevronRightIcon />
        </Button>
      </Box>
    </Flex>
  );
};

export default memo(Pagination);
