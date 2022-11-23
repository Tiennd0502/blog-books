import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

type Props = {
  placeholder: string;
  onSubmit: (value: string) => void;
};

const Search: React.FC<Props> = ({ placeholder, onSubmit }) => {
  const [keywords, setKeywords] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      onSubmit(keywords);
    }
  };

  return (
    <InputGroup role="form">
      <Input
        pr="50px"
        pl="20px"
        minH="49px"
        color="yellow.900"
        borderRadius="30px"
        fontSize="24px"
        backgroundColor="blue.100"
        border="1px solid blue.100"
        type="text"
        value={keywords}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <InputRightElement w="50px" h="100%">
        <SearchIcon
          role="button"
          w="22px"
          h="22px"
          _hover={{ color: 'orange.500' }}
          onClick={() => onSubmit(keywords)}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
