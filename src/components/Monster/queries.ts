import { gql, useQuery } from '@apollo/client';

// Actual monsters count around 334, so this is a safe upper bound
export const MONSTERS_QUERY_MAX_SIZE = 400;


const fragments = `
fragment monsterArmorClass on MonsterArmorClass {
  armor_class {
    type
    desc
    value
    armor {
    index
    name
    cost {
      quantity
      unit
    }
    desc
    equipment_category {
      index
      name
    }
    weight
    armor_category {
      index
      name
    }
    str_minimum
    stealth_disadvantage
    }
    spell {
    desc
    name
    }
    condition {
    desc
    name
    }
  }
}

fragment monsterAttack on MonsterAttack {
  damage {
    damage_dice
    damage_type {
      index
      name
      desc
    }
    }
  }

`;

const MONSTER_BASIC_INFO_FRAGMENT = gql`
  fragment MonsterBasicInfo on Monster {
    index
    name
    alignment
    desc
    size
    image
    type
  }
`;

const MONSTER_DETAILED_INFO_FRAGMENT = gql`
  fragment MonsterDetailedInfo on Monster {
    ...MonsterBasicInfo
    actions {
      actions {
        action_name
        type
        count
      }
      attacks {
        name
      }
    }
    condition_immunities {
      desc
      name
      index
    }
    intelligence
    proficiency_bonus
    senses {
      blindsight
      darkvision
      passive_perception
      tremorsense
      truesight
    }
    strength
    wisdom
    xp
    type
    speed {
      burrow
      climb
      fly
      hover
      swim
      walk
    }
    dexterity
    charisma
    constitution
    challenge_rating
    hit_points
    languages
    subtype
    hit_dice
    forms {
      index
      image
      name
    }
    legendary_actions {
      name
      desc
    }
    damage_immunities
    damage_resistances
    damage_vulnerabilities
    hit_points_roll
    proficiencies {
      proficiency {
        name
      }
      value
    }
    special_abilities {
      name
    }
    reactions {
      name
    }
  }
  ${MONSTER_BASIC_INFO_FRAGMENT}
`;

const GET_MONSTERS_LISTING_QUERY = gql`
query MonstersQuery($limit: Int!, $skip: Int, $name: String) {
  monsters(limit: $limit, skip: $skip, name: $name) {
    ...MonsterBasicInfo
  }
}

${MONSTER_BASIC_INFO_FRAGMENT}
`;

interface MonstersGQLQueryVariables {
  limit: number;
  skip: number;
  name: string;
}

type UseMonstersQueryVariables = Partial<MonstersGQLQueryVariables>;

export const useMonstersQuery = ({ name = '', limit = MONSTERS_QUERY_MAX_SIZE, skip = 0 }: UseMonstersQueryVariables)  => {
  return useQuery<{ monsters: Monster[] }, MonstersGQLQueryVariables>(GET_MONSTERS_LISTING_QUERY, { variables: { limit, skip, name } });
};
