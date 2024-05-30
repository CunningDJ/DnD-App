'use client';

import { Divider, Stack, Paper } from '@mui/material';
import Image from 'next/image';


import LinkButton from '@/components/LinkButton';
import { H3, Title } from '@/components/Typography';


export default function HomePage() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <Image src="/img/logo/logo.transp.full.png" alt="hero" width={500} height={500} />
        <Title>Welcome to D&D</Title>
        <Paper style={{textAlign:'center'}}>
          <H3>Pages</H3>
          <Divider />
          <LinkButton href="/monsters">
            Monsters
          </LinkButton>
        </Paper>
      </Stack>
    </>
  );
}
