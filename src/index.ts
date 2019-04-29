import { IGroup, Person } from './types';
import { Group } from './Group';

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

let theGates: IGroup = new Group("The Gates");
theGates.areMarried = true;
theGates.people = [bill, melinda];

let satya: Person = {
  id: `dh53os`,
  age: 51,
  firstName: `Satya`,
  lastName: `Nadella`,
};

let microsoftBuddies: IGroup = new Group("The Microsoft Buddies");
microsoftBuddies.people = [bill, melinda, satya];

console.log(`${theGates.name} (${theGates.id}):\n`
  + `${bill.firstName} ${bill.lastName} and ${melinda.firstName} `
  + `${melinda.lastName}`);

console.log(`\n`);

  console.log(`${microsoftBuddies.name} (${microsoftBuddies.id}):\n`
    + `${bill.firstName} ${bill.lastName}, ${melinda.firstName} `
    + `${melinda.lastName}, and ${satya.firstName} ${satya.lastName}`);