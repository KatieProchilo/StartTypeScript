export interface IGroup {
  id: string | number;
  name: string;
  areMarried?: boolean;
  people?: People;
}

export type People = Person[];

export interface Person {
  id: string | number;
  firstName: string;
  lastName: string;
  age?: number;
}