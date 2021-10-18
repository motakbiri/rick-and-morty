import React, { useState,useEffect } from 'react';
import {Center, SimpleGrid, Box } from '@chakra-ui/react';
import { useQuery,useQueryClient } from 'react-query';
import { fetchCharacters } from '../api/queries';
import { CharacterItem, Pagination, Loading } from '../components/common';
export default function Characters() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { status, data} = useQuery(['characters', page], ()=>fetchCharacters(page), { keepPreviousData : true });

  // // Prefetch the next page!
  useEffect(() => {
    if (data?.info?.next) {
      console.log('prefetch')
      queryClient.prefetchQuery(["characters", page + 1], () =>
        fetchCharacters(page + 1)
      );
    }
  }, [data, page, queryClient]);

  if (status === 'loading') return <Center h="80"><Loading/></Center>;
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
