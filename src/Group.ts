import { IGroup, People } from './types';

export class Group implements IGroup {
  // Declare required fields, if any.
  public id: string | number;
  public name: string;

  // Declare optional fields, if any.
  public areMarried?: boolean;
  public people?: People = [];


  /**
   * Creates a new Group with the bare minimum - a group name -
   * passed in.
   *
   * @param {string} name the name of a group a user has chosen.
   */
  constructor(name: string, areMarried?: boolean, people?: People) {
    // Check for required parameters.
    if (name === undefined || name === "") {
      throw new TypeError(`Names passed into groups must be strings with one or more character.`);
    }

    // Initialize required fields, if any.
    this.id = this.createId();
    this.name = name;

    // Initialize optional fields, if any.
    this.areMarried = areMarried || false;
    this.people = people || [];
  }

  /**
   * Create a "unique" ID. This is not suitable for production,
   * but is will suffice for the example.
   */
  public createId = () => {
    let str: string = "";
    for (let i = 0; i < 3; i++) {

    }
    return str;
  }
}