import React from 'react';

import { Center, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

type PaginationType = {
  total: number;
  current: number;
  onBack: () => void;
  onNext: () => void;
};

const Pagination = (props: PaginationType) => {
  const { total, current, onBack, onNext } = props;

  return (
    <Center direction="row" py={12} justify="center">
      { true && (
        <Button
          color={useColorModeValue('brand.100', 'brand.200')}
          casing="capitalize"
          disabled={current === 1}
          leftIcon={<ArrowBackIcon />}
          onClick={onBack}
        >
        Back
        </Button>
      )}
      <Text px="4">{current}</Text>
      { true && (
        <Button
          color={useColorModeValue('brand.100', 'brand.200')}
          casing="capitalize"
          disabled={current === total}
          rightIcon={<ArrowForwardIcon />}
          onClick={onNext}
        >
          Next 
        </Button>
      )}
    </Center>
  );
};

export default Pagination;
