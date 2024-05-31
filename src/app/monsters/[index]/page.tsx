'use client';

import { Card, CardMedia, Container, List, ListItem, ListItemText } from '@mui/material';
import { NextPage } from 'next';

import { getMonsterImagePath } from '@/components/DndApollo/dndApi';
import { useMonsterQuery } from '@/components/Monster/queries';
import { Body1, H2, Title } from '@/components/Typography';


const MonsterPage: NextPage<{params: { index:string }}> = ({ params: { index }}) => {
  const { error, loading, data } = useMonsterQuery(index);
  const { monster } = data || {};
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const image = monster && getMonsterImagePath(monster?.name);
  return monster ? (
    <Container maxWidth="md">
      <Card>
        <Title>{monster.name}</Title>
        <CardMedia image={image} component="img" />
        <Body1><b>Challenge Rating</b>: {monster.challenge_rating}</Body1>
        {/* <p>Armor Class: {monster.armor_class}</p> */}
        <Body1><b>Hit Points</b>: {monster.hit_points} ({monster.hit_dice})</Body1>
        {/* <p>Speed: {monster.speed}</p> */}
        <Body1><b>STR</b>: {monster.strength} <b>DEX</b>: {monster.dexterity} <b>CON</b>: {monster.constitution} <b>INT</b>: {monster.intelligence} <b>WIS</b>: {monster.wisdom} <b>CHA</b>: {monster.charisma}</Body1>
        <Body1><b>Damage Vulnerabilities</b>: {monster.damage_vulnerabilities}</Body1>
        <Body1><b>Damage Resistances</b>: {monster.damage_resistances}</Body1>
        <Body1><b>Damage Immunities</b>: {monster.damage_immunities}</Body1>
        {/* <p>Condition Immunities: {monster.condition_immunities}</p> */}
        {/* <p>Senses: {monster.senses}</p> */}
        <Body1><b>Languages</b>: {monster.languages}</Body1>
        <H2>Speed</H2>
        <List>
          {Object.entries(monster.speed).filter(([key,value]) => key !== '__typename' && value).map(([key, value]) => (
            <ListItem key={key}><ListItemText><b>{key}</b>: {value}</ListItemText></ListItem>
          ))}
        </List>
        <H2>Proficiencies</H2>
        <List>
          {monster.proficiencies.map((proficiency) => (
            <ListItem key={proficiency.proficiency.name}><b>{proficiency.proficiency.name}</b>: {proficiency.value}</ListItem>
          ))}
        </List>
        <H2>Special Abilities</H2>
        <List>
          {monster.special_abilities.map((ability) => (
            <ListItem key={ability.name}><b>{ability.name}</b>: {ability.desc}</ListItem>
          ))}
        </List>
        <H2>Actions</H2>
        <List>
          {monster.actions.map((action) => (
            // <ListItem key={action.name}><b>{action.name}</b>: {action.desc}</ListItem>
            <ListItem key={action.name}><ListItemText><b>{action.name}</b>: {action.desc}</ListItemText></ListItem>
          ))}
        </List>
        <H2>Legendary Actions</H2>
        <List>
          {monster.legendary_actions.map((action) => (
            <ListItem key={action.name}><ListItemText><b>{action.name}</b>: {action.desc}</ListItemText></ListItem>
          ))}
        </List>
        <textarea style={{width: '95%', height: 600}}>{JSON.stringify(monster,null,2)}</textarea>
      </Card>
    </Container>
  ): (
    <Title>Monster not found.  Sorry</Title>
  )
};

export default MonsterPage;
