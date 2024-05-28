"use client";

import { getMonsterImagePath } from "@/components/DndApollo/dndApi";
import MonsterCard from "../components/Monster/MonsterCard";
import { GET_MONSTERS_QUERY } from "../components/Monster/queries";
import { useQuery } from "@apollo/client";
import { Grid } from '@mui/material';

const MONSTERS_PAGE_SIZE = 20;

export default function MonstersListPage() {
  const { loading, data, error } = useQuery<{ monsters: Monster[] }>(GET_MONSTERS_QUERY, {variables: {limit: MONSTERS_PAGE_SIZE}});
  const { monsters } = data || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return monsters && (
    <Grid container spacing={2}>
      {monsters.map((monster, idx) => (
        <Grid item xs={3} key={idx}><MonsterCard data={monster} key={idx} /></Grid>
      ))}
    </Grid>
  );
}
