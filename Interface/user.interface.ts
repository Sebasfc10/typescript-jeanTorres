import { IPhone } from '../Interface/phone.interface';

export interface IUser {
  names: string;
  lastNames: string;
  email: string;
  age: number;
  gender: string;
  phones: IPhone[];
}
