import {User} from "./User";

export class Proyect {

  private _id: number;
  private _name: string;
  private _description: string;
  private _period: string;
  private _user: User;

  constructor(id: number, name: string, description: string, period: string, user: User) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._period = period;
    this._user = user;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get period(): string {
    return this._period;
  }

  set period(value: string) {
    this._period = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
