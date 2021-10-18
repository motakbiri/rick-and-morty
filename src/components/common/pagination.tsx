import React from 'react';

import { Center, Text, Button } from '@chakra-ui/react';
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
      <Button
        casing="capitalize"
        disabled={current === 1}
        leftIcon={<ArrowBackIcon />}
        onClick={onBack}
      >
        Back
      </Button>

      <Text fontWeight="bold" px="4">
        {current}
      </Text>

      <Button
        casing="capitalize"
        disabled={current === total}
        rightIcon={<ArrowForwardIcon />}
        onClick={onNext}
      >
        Next
      </Button>
    </Center>
  );
};

export default Pagination;
