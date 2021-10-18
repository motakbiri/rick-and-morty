import React from 'react';

import {
  Tag, useColorModeValue, Text, Stack, Image, Popover, Button,
  Box,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useToast
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'

type CharacterItemType = {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: Array<string>;
  location: {
    name: string;
  };
};

const CharacterItem = (props: CharacterItemType) => {

  const toast = useToast()

  const { name, status, species, gender, image, location, episode } = props;


  const handleEpisodeClick = () => {
        toast.closeAll()
        toast({
          title: "Coming Soon!",
          description: "Episodes are currently under development.",
          status: "info",
          duration: 5000,
          isClosable: true,
        })
        }


  return (
    <Stack
      bg={useColorModeValue('gray.100', 'gray.900')}
      direction="column"
      pt={12}
      pb={6}
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
      <Text as="i" color={useColorModeValue('gray.600', 'gray.300')}>
        {location.name}
      </Text>
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost" leftIcon={<InfoOutlineIcon />}>Episodes</Button>
        </PopoverTrigger>
        <PopoverContent bg={useColorModeValue('gray.100', 'gray.900')}>
          <PopoverCloseButton />
          <PopoverBody>

            {
              episode.map((item) => {
                const episodeNumber = item.split("/").pop();
                return (<Button key={episodeNumber} variant="link"
                onClick={handleEpisodeClick}>{episodeNumber}
                </Button>)
                
              })
            }

          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

export default CharacterItem;
