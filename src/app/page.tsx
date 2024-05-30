'use client';

import Image from 'next/image';

import { Divider, Stack, Paper, Typography } from '@mui/material';

import { H3, Title } from '@/components/Typography';
import LinkButton from '@/components/LinkButton';


export default function HomePage() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <Image src="/img/logo/logo.transp.full.png" alt="hero" width={500} height={500} />
        <Title>Welcome to D&D</Title>
        <Paper style={{textAlign:'center'}}>
          <H3>Choices</H3>
          <Divider />
          <LinkButton href="/monsters">
            Monster
          </LinkButton>
        </Paper>
      </Stack>
    </>
  );
}
