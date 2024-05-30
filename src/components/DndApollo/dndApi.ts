
const DND_API_BASEPATH = 'https://www.dnd5eapi.co';
export const DND_GRAPHQL_API = `${DND_API_BASEPATH}/graphql`;

export const convertDndPath = (path: string) => `${DND_API_BASEPATH}${path}`;
export function getMonsterImagePath(monsterName: string): string {
  const convertedName = monsterName.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z0-9-()]/g,'');
  return `/img/monsters/${convertedName}.jpg`
}