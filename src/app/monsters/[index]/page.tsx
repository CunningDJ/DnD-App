'use client';

import { Card, CardMedia, Container, List, ListItem, ListItemText } from '@mui/material';
import { NextPage } from 'next';
import { FC } from 'react';

import { getMonsterImagePath } from '@/components/DndApollo/dndApi';
import { useMonsterQuery } from '@/components/Monster/queries';
import { Body1, H2, H4, Title } from '@/components/Typography';


const AttributeList: FC<{attributes:object, header:string}> = ({attributes, header}) => (
  <>
    <H2>{header}</H2>
    <List>
      {Object.entries(attributes).filter(([key,value]) => key !== '__typename' && value).map(([key, value]) => (
        <ListItem key={key}><ListItemText><b>{key}</b>: {value}</ListItemText></ListItem>
      ))}
    </List>
  </>
);

const NameDescriptionList: FC<{items: {name:string, desc:string}[], header:string}> = ({items, header}) => (
  <>
    <H2>{header}</H2>
    <List>
      {items.map(({name, desc}) => (
        <ListItem key={name}><ListItemText><b>{name}</b>: {desc}</ListItemText></ListItem>
      ))}
    </List>
  </>
);


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
        <H4><b>{monster.size} {monster.type}</b>, {monster.alignment}</H4>
        <CardMedia image={image} component="img" />
        <Body1><b>Challenge Rating</b>: {monster.challenge_rating}</Body1>
        {/* <p>Armor Class: {monster.armor_class}</p> */}
        <Body1><b>Hit Points</b>: {monster.hit_points} ({monster.hit_dice})</Body1>
        <Body1><b>STR</b>: {monster.strength} <b>DEX</b>: {monster.dexterity} <b>CON</b>: {monster.constitution} <b>INT</b>: {monster.intelligence} <b>WIS</b>: {monster.wisdom} <b>CHA</b>: {monster.charisma}</Body1>
        <Body1><b>Damage Vulnerabilities</b>: {monster.damage_vulnerabilities}</Body1>
        <Body1><b>Damage Resistances</b>: {monster.damage_resistances}</Body1>
        <Body1><b>Damage Immunities</b>: {monster.damage_immunities}</Body1>
        {/* <p>Condition Immunities: {monster.condition_immunities}</p> */}
        <Body1><b>Languages</b>: {monster.languages}</Body1>
        <AttributeList header="Speed" attributes={monster.speed} />
        <AttributeList header="Senses" attributes={monster.senses} />
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
        <NameDescriptionList header="Actions" items={monster.actions} />
        <NameDescriptionList header="Legendary Actions" items={monster.legendary_actions} />
        {/* <textarea style={{width: '95%', height: 600}}>{JSON.stringify(monster,null,2)}</textarea> */}
      </Card>
    </Container>
  ): (
    <Title>Monster not found.  Sorry</Title>
  )
};

export default MonsterPage;
