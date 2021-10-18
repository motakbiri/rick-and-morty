import React from 'react';

import { Tag, useColorModeValue, Text, Stack, Image } from '@chakra-ui/react';

type CharacterItemType = {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
};

const CharacterItem = (props: CharacterItemType) => {
  const { name, status, species, gender, image, location } = props;

  return (
    <Stack
      bg={useColorModeValue('gray.100', 'gray.900')}
      direction="column"
      py={12}
      align="center"
      boxShadow="md"
      rounded="md"
    >
      <Image
        rounded="lg"
        width="80%"
        objectFit="cover"
        src={image}
        alt={name}
      />
      <Text pt="4" fontSize="2xl" fontWeight="500">
        {name}
      </Text>
      <Stack direction="row" align="center">
        <Tag
          size="md"
          variant="solid"
          bg={useColorModeValue('brand.100', 'brand.200')}
        >
          {status}
        </Tag>
        <Tag
          size="md"
          variant="solid"
          bg={useColorModeValue('brand.100', 'brand.200')}
        >
          {gender}
        </Tag>
        <Tag
          size="md"
          variant="solid"
          bg={useColorModeValue('brand.100', 'brand.200')}
        >
          {species}
        </Tag>
      </Stack>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {location.name}
      </Text>
    </Stack>
  );
};

export default CharacterItem;
