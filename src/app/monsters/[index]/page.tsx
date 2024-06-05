'use client';

import { Card, CardMedia, Container, List, ListItem, ListItemText } from '@mui/material';
import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { FC } from 'react';

import { getMonsterImagePath } from '@/components/DndApollo/dndApi';
import { useMonsterQuery } from '@/components/Monster/queries';
import { Body1, H4, Title } from '@/components/Typography';


const AttributeList: FC<{attributes:object, header:string}> = ({attributes, header}) => (
  attributes && <>
    <H4>{header}</H4>
    <List>
      {Object.entries(attributes).filter(([key,value]) => key !== '__typename' && value).map(([key, value]) => (
        <ListItem key={key}><ListItemText><b>{key}</b>: {value}</ListItemText></ListItem>
      ))}
    </List>
  </>
);

const NameDescriptionList: FC<{items: {name:string, desc:string}[], header:string}> = ({items, header}) => (
  items && <>
    <H4>{header}</H4>
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
  const highlightColor = 'orangered';
  const bgColor = '#444';
  const checkStyle = {
    backgroundColor: bgColor,
    backgroundImage:`repeating-linear-gradient(45deg, ${highlightColor} 25%, transparent 25%, transparent 75%, ${highlightColor} 75%, ${highlightColor}), repeating-linear-gradient(45deg, ${highlightColor} 25%, ${bgColor} 25%, ${bgColor} 75%, ${highlightColor} 75%, ${highlightColor})`,
    backgroundPosition: '0 0, 10px 10px',
    backgroundSize: '25px 25px'
  };

  const bgSize1 = '80px 80px';
  const bgSize2 = '20px 20px';
  const gridStyle = {
    backgroundColor: bgColor,
    backgroundImage: `linear-gradient(${highlightColor} 2px, transparent 2px), linear-gradient(90deg, ${highlightColor} 2px, transparent 2px), linear-gradient(${highlightColor} 1px, transparent 1px), linear-gradient(90deg, ${highlightColor} 1px, ${bgColor} 1px)`,
    backgroundSize: `${bgSize1}, ${bgSize1}, ${bgSize2}, ${bgSize2}`,
    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
  };

  const image = monster && getMonsterImagePath(monster?.name);
  return monster ? (
    <Container sx={{ p:5,
      ...gridStyle
    }}
    onClick={
      (e) => {
        e.preventDefault();
        // console.log('redirecting to /monsters')
        return redirect('/monsters');
      }
    }>
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
          <H4>Proficiencies</H4>
          <List>
            {monster.proficiencies.map((proficiency) => (
              <ListItem key={proficiency.proficiency.name}><b>{proficiency.proficiency.name}</b>: {proficiency.value}</ListItem>
            ))}
          </List>
          <NameDescriptionList header="Special Abilities" items={monster.special_abilities} />
          <NameDescriptionList header="Actions" items={monster.actions} />
          <NameDescriptionList header="Legendary Actions" items={monster.legendary_actions} />
          {/* <textarea style={{width: '95%', height: 600}}>{JSON.stringify(monster,null,2)}</textarea> */}
        </Card>
      </Container>
    </Container>
  ): (
    <Title>Monster not found.  Sorry</Title>
  )
};

export default MonsterPage;

/*
background-color: #e5e5f7;
opacity: 0.8;
background-image:  linear-gradient(#444cf7 2px, transparent 2px), linear-gradient(90deg, #444cf7 2px, transparent 2px), linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(90deg, #444cf7 1px, #e5e5f7 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;

*/