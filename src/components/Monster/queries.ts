import { gql } from "@apollo/client";

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

`
armor_class {
    ...monsterArmorClass
  }
attacks {
    name
    ...monsterAttack
}
  
`

export const GET_MONSTERS_QUERY = gql`
query MonstersQuery($limit: Int!) {
    monsters(limit: $limit) {
      index
      name
      alignment
      desc
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
      image
      proficiency_bonus
      size
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
  }
`;

/*
        armor_class
        hit_points
        hit_dice
        speed
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
        damage_vulnerabilities
        damage_resistances
        damage_immunities
        condition_immunities
        senses
        languages
        challenge_rating
        proficiencies {
            name
            value
        }
        special_abilities {
            name
            desc
        }
        actions {
            name
            desc
        }
        legendary_actions {
            name
            desc
        }

*/