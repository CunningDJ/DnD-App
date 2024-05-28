"use client";

import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { Body1, H1 } from '../Typography';
import { getMonsterImagePath } from '../DndApollo/dndApi';

interface MonsterCardProps {
    data: Monster;
}

const MonsterCard = ({ data: monster }: MonsterCardProps) => {
  // const image = monster.image && convertDndPath(monster.image);
  const image = getMonsterImagePath(monster.name);

  return (
    <Card>
        <CardHeader title={monster.name}/>
        {image && <CardMedia image={image} component="img" />}
        <CardContent>
              {/* <H1>{monster.name}</H1> */}
            <Body1>{monster.size} {monster.type}, {monster.alignment}</Body1>
        </CardContent>
        {/* <p>Armor Class: {monster.armor_class}</p>
        <p>Hit Points: {monster.hit_points} ({monster.hit_dice})</p>
        <p>Speed: {monster.speed}</p>
        <p>STR: {monster.strength} DEX: {monster.dexterity} CON: {monster.constitution} INT: {monster.intelligence} WIS: {monster.wisdom} CHA: {monster.charisma}</p>
        <p>Damage Vulnerabilities: {monster.damage_vulnerabilities}</p>
        <p>Damage Resistances: {monster.damage_resistances}</p>
        <p>Damage Immunities: {monster.damage_immunities}</p>
        <p>Condition Immunities: {monster.condition_immunities}</p>
        <p>Senses: {monster.senses}</p>
        <p>Languages: {monster.languages}</p>
        <p>Challenge Rating: {monster.challenge_rating}</p>
        <h2>Proficiencies</h2>
        <ul>
        {monster.proficiencies.map((proficiency) => (
            <li key={proficiency.name}>{proficiency.name}: {proficiency.value}</li>
        ))}
        </ul>
        <h2>Special Abilities</h2>
        <ul>
        {monster.special_abilities.map((ability) => (
            <li key={ability.name}>{ability.name}: {ability.desc}</li>
        ))}
        </ul>
        <h2>Actions</h2>
        <ul>
        {monster.actions.map((action) => (
            <li key={action.name}>{action.name}: {action.desc}</li>
        ))}
        </ul>
        <h2>Legendary Actions</h2>
        <ul>
        {monster.legendary_actions.map((action) => (
            <li key={action.name}>{action.name}: {action.desc}</li>
        ))}
        </ul> */}
    </Card>
  );
};

export default MonsterCard;