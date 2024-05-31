'use client';

import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import Link from 'next/link'

import { getMonsterImagePath } from '@/components/DndApollo/dndApi';
import { Body1 } from '@/components/Typography';

interface MonsterCardProps {
  data: Monster;
}

const MonsterCard = ({ data: monster }: MonsterCardProps) => {
  const image = getMonsterImagePath(monster.name);

  return (
    <Link href={`/monsters/${monster.index}`} style={{textDecoration:'none'}}>
      <Card>
        <CardHeader title={monster.name}/>
        {image && <CardMedia image={image} component="img" />}
        <CardContent>
          <Body1>{monster.size} {monster.type}, {monster.alignment}</Body1>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MonsterCard;