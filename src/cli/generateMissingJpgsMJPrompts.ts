'use server';

import fs from 'fs';

import { gql } from '@apollo/client';

import { dndApolloClient } from '@/cli/cliUtils';
import { getMonsterImagePath } from '@/components/DndApollo/dndApi';


const GET_MONSTERS_QUERY = gql`query MonstersQuery($limit: Int!) { monsters(limit: $limit) { name index } }`;

dndApolloClient.query<{ monsters: Monster[] }>({
  query: GET_MONSTERS_QUERY,
  variables: {limit: 400}
})
  .then(({ data }) => {
    const { monsters } = data;

    let currMissingNames: string[] = [];
    let groupedMissingNames: string[][] = [];
    const allMonsters = monsters.map((monster) =>
      ({path: `public${getMonsterImagePath(monster.name)}`, name: monster.name })
    );
    allMonsters.forEach(({ path: p, name}) => {
      if (!fs.existsSync(p)) {
        currMissingNames.push(name);
      }

      // Grouping by <= 4; 4 is the max number of permutations in a midjourney query
      if (currMissingNames.length == 4) {
        groupedMissingNames.push(currMissingNames);
        currMissingNames = [];
      }
    });
    if (currMissingNames.length > 0) {
      groupedMissingNames.push(currMissingNames);
    }
    if (groupedMissingNames.length > 0) {
      console.log('Midjourney Prompts for missing Monster Images:\n===  ===  ===');
      groupedMissingNames.forEach(namesGroup => {
        console.log(`{${namesGroup.map(name => name.replaceAll(',','')).join(', ')}}, style of dungeons & dragons monster manual`);
      })
    }
  })