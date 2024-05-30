
interface Monster {
  index: string;
  name: string;
  alignment: string;
  armor_class: {
    type: string;
    desc: string;
    value: number;
    armor: {
      index: string;
      name: string;
      cost: {
        quantity: number;
        unit: string;
      };
      desc: string;
      equipment_category: {
        index: string;
        name: string;
      };
      weight: number;
      armor_category: {
        index: string;
        name: string;
      };
      str_minimum: number;
      stealth_disadvantage: boolean;
    };
    spell: {
      desc: string;
      name: string;
    };
    condition: {
      desc: string;
      name: string;
    };
  };
  desc: string;
  actions: {
    actions: {
      action_name: string;
      type: string;
      count: number;
    };
    attacks: {
      damage: {
        damage_dice: string;
        damage_type: {
          index: string;
          name: string;
          desc: string;
        };
      };
      name: string;
    };
  };
  condition_immunities: {
    desc: string;
    name: string;
    index: string;
  };
  intelligence: number;
  image: string;
  proficiency_bonus: number;
  size: string;
  senses: {
    blindsight: number;
    darkvision: number;
    passive_perception: number;
    tremorsense: number;
    truesight: number;
  };
  strength: number;
  wisdom: number;
  xp: number;
  type: string;
  speed: {
    burrow: number;
    climb: number;
    fly: number;
    hover: boolean;
    swim: number;
    walk: number;
  };
  dexterity: number;
  charisma: number;
  constitution: number;
  challenge_rating: number;
  hit_points: number;
  languages: string;
  subtype: string;
  hit_dice: string;
  forms: {
    index: string;
    image: string;
    name: string;
  };
  legendary_actions: {
    name: string;
    desc: string;
  };
  damage_immunities: string;
  damage_resistances: string;
  damage_vulnerabilities: string;
  hit_points_roll: string;
  proficiencies: {
    proficiency: {
      name: string;
    };
    value: number;
  };
  special_abilities: {
    name: string;
  };
  reactions: {
    name: string;
  };
}