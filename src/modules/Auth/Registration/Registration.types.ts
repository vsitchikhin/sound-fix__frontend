export class UserData {
  email: string | null;
  password: string | null;
  account_type: string | number;

  constructor() {
    this.email = null;
    this.password = null;
    this.account_type = 'notStated';
  }
}

export class User {
  birth_date: string | null;
  name: string | null;
  surname: string | null;
  patronymic: string | null;

  constructor() {
    this.birth_date = null;
    this.name = null;
    this.surname = null;
    this.patronymic = null;
  }
}

export class Teacher {
  institution: string | null;
  qualification: string | null;

  constructor() {
    this.institution = null;
    this.qualification = null;
  }
}


export class Passport {
  passport_numbers: number | null;
  passport_organ: string | null;
  issue_date: Date | null;
  subdivision_code: string | null;

  constructor() {
    this.passport_numbers = null;
    this.passport_organ = null;
    this.issue_date = null;
    this.subdivision_code = null;
  }
}


export interface RegistrationError {
  error: string,
  title: string,
}
