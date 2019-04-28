export interface Person {
  id: string | number;
  name: string;
  friends?: Friend[];
}

export interface Friend {
  name: string;
  yearsOfFriendship: number;
}