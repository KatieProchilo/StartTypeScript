import { Friend, Person} from './types';

const foo: number = 5;

console.log(foo);

const bill: Person = {
  id: 5,
  name: 'Bill'
}

const melinda: Friend = {
  name: 'Melinda',
  yearsOfFriendship: 9
}

bill.friends = [melinda];

console.log(bill);