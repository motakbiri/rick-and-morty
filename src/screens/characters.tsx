import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchCharacters } from '../api/queries';
import { CharacterItem, Pagination } from '../components/common';
export default function Characters() {
  const [page, setPage] = useState(1);
  const { status, data= {}, isFetching, isPreviousData } = useQuery(['characters', page], ()=>fetchCharacters(page), { keepPreviousData : true });

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;
  console.log(page)
  const { results, info } = data;

  const handleBack = () => setPage(page => Math.max(page - 1, 1))
  const handleNext = () => setPage(page => Math.min(page + 1, info.pages));

  return (
    <Box p="8" alignItems="center">
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {results.map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
      </SimpleGrid>
      <Pagination
        current={page}
        total={info.pages}
        onBack={handleBack}
        onNext={handleNext}
      />
    </Box>
  );
}
