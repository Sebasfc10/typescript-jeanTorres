// Import stylesheets
import { IUser } from './Interface/user.interface';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
console.log(appDiv);
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const cliente: IUser = {
  names: 'jean',
  lastNames: 'torres',
  email: 'xxx@xxxx.com',
  age: 11,
  gender: 'male',
  phones: [
    {
      type: 'home',
      phone: '123456789'
    },
    {
      type: 'movil',
      phone: '1111111111'
    }
  ]
};
