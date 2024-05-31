'use client';

import { ApolloError } from '@apollo/client';
import { Container, Stack, TextField, Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FC, useEffect, useState } from 'react';

import MonsterCard from '@/components/Monster/MonsterCard';
import { useMonstersQuery } from '@/components/Monster/queries';
import { H3, Title } from '@/components/Typography';

const MONSTERS_PAGE_SIZE = 20;
const SEARCH_DELAY_MS = 300;
interface MonstersListProps {
  loading: boolean;
  monsters?: Monster[];
  error?: ApolloError;
}

const MonstersList: FC<MonstersListProps> = ({ loading, error, monsters }) => {
  if (loading) return <H3>Loading...</H3>;
  if (error) return <H3>Error: {error.message}</H3>;
  return monsters && (
    <Container>
      <Grid container spacing={1}>
        {monsters.map((monster, idx) => (
          <Grid xs={12} md={6} lg={3} key={idx}><MonsterCard data={monster} key={idx} /></Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default function MonstersListPage() {
  const [searchString, setSearchString] = useState<string>('');
  const [activeSearchString, setActiveSearchString] = useState<string>('');

  const [pageNumber, setPageNumber] = useState<number>(1);

  const { loading, data, error } = useMonstersQuery({ name: activeSearchString });
  // If we want pagination by gql query:
  // const { loading, data, error } = useMonstersQuery({ limit: MONSTERS_PAGE_SIZE, skip: activePageNumber, name: activeSearchString });
  
  const { monsters } = data || {};
  const monstersCount = monsters?.length || 0;
  const startIdx  = (pageNumber-1) * MONSTERS_PAGE_SIZE;
  const endIdx = (pageNumber) * MONSTERS_PAGE_SIZE;
  
  useEffect(() => {
    const searchTimeoutId = setTimeout(() => {
      setActiveSearchString(searchString);
    }, SEARCH_DELAY_MS);
    // open file, write something

    return () => clearTimeout(searchTimeoutId);
  }, [searchString]);

  return (
    <Stack justifyContent="center" alignItems="center">
      <Title>Monsters</Title>
      <TextField onChange={(e) => setSearchString(e.target.value)} label="Search" variant="outlined" sx={{ m: 2 }} />
      <Pagination count={Math.ceil(monstersCount / MONSTERS_PAGE_SIZE)} page={pageNumber} onChange={(_, page) => setPageNumber(page)} />
      <MonstersList monsters={monsters?.slice(startIdx, endIdx)} loading={loading} error={error} />
    </Stack>
  );
}