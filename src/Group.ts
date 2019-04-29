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
    this.id = this.createId(40);
    this.name = name;

    // Initialize optional fields, if any.
    this.areMarried = areMarried || false;
    this.people = people || [];
  }

  /**
   * Create a possibly not unique ID. This is not suitable for
   * production, but is will suffice for the example.
   */
  public createId = (length) => {
    // TODO: Eventually create a Groups class to ensure IDs are unique.
    return (Math.random() + 1).toString(36).substring(2, length);
  }
}