export interface IGroup {
  id: string | number;
  name: string;
  areMarried?: boolean;
  people?: People;
}

export type People = IPerson[];

export interface IPerson {
  id: string | number;
  firstName: string;
  lastName: string;
  age?: number;
}