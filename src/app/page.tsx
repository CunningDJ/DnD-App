"use client";

import Image from "next/image";

import { Divider, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { H1, H3 } from "@/components/Typography";
import LinkButton from "@/components/LinkButton";


export default function HomePage() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <Image src="/img/logo/logo.full.png" alt="hero" width={500} height={500} />
        <H1>Welcome to D&D</H1>
        <H3>Choices</H3>
        <Divider />
        <LinkButton href="/monsters">
            Monster
        </LinkButton>
      </Stack>
    </>
  );
}
