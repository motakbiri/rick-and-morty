import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../../assets/logo.png';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={6}
      sx={{ position: 'sticky', top: '0' }}
      zIndex="sticky"
    >
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <Image src={logo} h="12" alt="rick and morty logo" />
        <Button
          aria-label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}
