export class User {
  email: string | null;
  password: string | null;
  accountType: AccountTypeEnum;

  constructor() {
    this.email = null;
    this.password = null;
    this.accountType = AccountTypeEnum.notStated;
  }
}

export class UserData {
  sex: UserSexEnum;
  birthDate: string | null;
  passport: Passport;
  name: string | null;
  surname: string | null;
  patronymic: string | null;

  constructor() {
    this.sex = UserSexEnum.notStated;
    this.birthDate = null;
    this.passport = {
      passportNumbers: null,
      passportOrgan: null,
      issueDate: null,
      subdivisionCode: null,
    };
    this.name = null;
    this.surname = null;
    this.patronymic = null;
  }
}

export class TeacherData {
  institution: string | null;
  qualification: string | null;
  diploma: object;

  constructor() {
    this.institution = null;
    this.qualification = null;
    this.diploma = {};
  }
}

export enum UserSexEnum {
  notStated = 'Не выбран',
  male = 'муж.',
  female = 'жен.',
}

export enum AccountTypeEnum {
  notStated = 'Не выбран',
  teacher = 'Логопед',
  parent = 'Родитель',
  child = 'Ребёнок',
}

export interface Passport {
  passportNumbers: number | null,
  passportOrgan: string | null,
  issueDate: Date | null,
  subdivisionCode: string | null,
}

export interface RegistrationError {
  error: string,
  title: string,
}
