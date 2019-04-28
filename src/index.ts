import { Group, Person} from './types';

const billAge: number = 63;

let bill: Person = {
  id: 5,
  age: billAge,
  firstName: `Bill`,
  lastName: `Gates`,
};

let melinda: Person = {
  id: `abd`,
  age: 54,
  firstName: `Melinda`,
  lastName: `Gates`,
};

let satya: Person = {
  id: `dh53os`,
  age: 51,
  firstName: `Satya`,
  lastName: `Nadella`,
};

let microsoftBuddies: Group = {
  name: `The Microsoft Buddies`,
  areFriends: true,
  people: [
    bill,
    melinda,
    satya,
  ]
};

console.log(`${microsoftBuddies.name}:\n`
  + `${bill.firstName} ${bill.lastName}, ${melinda.firstName} `
  + `${melinda.lastName}, and ${satya.firstName} ${satya.lastName}`);