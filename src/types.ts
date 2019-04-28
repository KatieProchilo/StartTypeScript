export interface Group {
  areMarried?: boolean;
  areFriends?: boolean;
  name: string;
  people: People;
}

export type Groups = Group[];

export type People = Person[];

export interface Person {
  id: string | number;
  age?: number;
  firstName: string;
  lastName: string;
  groups?: Groups;
}