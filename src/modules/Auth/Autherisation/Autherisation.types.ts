export class User {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}


export interface LoginnedUser {
  id: number | null,
  name: string | null,
  surname: string | null,
  patronymic: string | null,
  birthDate: string | null,
  age: number | null,
  accountType: number | string | null,
  email: string | null,
  password: string | null,
}
