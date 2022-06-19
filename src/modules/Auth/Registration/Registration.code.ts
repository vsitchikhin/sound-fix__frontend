import {defineComponent, ref, Ref} from 'vue';
import {
  AccountTypeEnum,
  Passport,
  RegistrationError,
  TeacherData,
  User,
  UserData,
  UserSexEnum
} from './Registration.types';
import axios from "axios";

export default defineComponent({
  setup() {
    const user = new User();
    const userData = new UserData();
    const teacherData = new TeacherData();

    const confirmPassword: Ref<string | null> = ref(null);
    const userAgreement: Ref<Boolean> = ref(false);
    const personalDataAgreement: Ref<Boolean> = ref(false);

    const registrationError: Ref<Boolean> = ref(false);
    const registrationErrors: Array<RegistrationError> =[];

    function emailValidate(email: string | null): Boolean {
      const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return emailRegExp.test(email || '');
    }

    function passwordValidation(password: string | null): Boolean {
      return (typeof password === 'string' && password.length >= 8 && password === confirmPassword.value);
    }

    function passportValidation(passport: Passport) {
      return (passport.passportNumbers !== null
        && passport.passportOrgan !== null
        && passport.issueDate !== null
        && passport.subdivisionCode !== null);
    }

    function checkFormData(user: User, data: UserData, teacher: TeacherData): void {
      registrationError.value = false;
      registrationErrors.length = 0;

      const isValidEmail = emailValidate(user.email);
      const isValidPassword = passwordValidation(user.password);
      if (user.accountType === AccountTypeEnum.notStated || !isValidEmail || !isValidPassword) {
        registrationErrors.push({error: 'User', title: 'Не правильно введены email или пароль, или не выбран тип аккаунта'});
      }

      const isValidPassport = passportValidation(data.passport);
      const isValidDate = typeof data.birthDate === 'string' && (data.birthDate.length === 10 || data.birthDate.length === 8);
      const isValidName = typeof data.name === 'string' && data.name.length > 1;
      const isValidSurname = typeof data.surname === 'string' && data.surname.length > 1;
      if (data.sex === UserSexEnum.notStated || !isValidPassport || !isValidDate || !isValidName || !isValidSurname) {
        registrationErrors.push({error: 'UserData', title: 'Не правильно введены данные'})
      }

      if (user.accountType == AccountTypeEnum.teacher) {
        const isValidInstitute = typeof teacher.institution === 'string' && teacher.institution.length > 1;
        const isValidQualification = typeof teacher.qualification === 'string' && teacher.qualification.length > 1;
        if (!isValidInstitute || !isValidQualification) {
          registrationErrors.push({error: 'Teacher', title: 'Не правильно введены данные о преподавателе'});
        }
      }

      if (registrationErrors.length > 0) {
        registrationError.value = true;
      }
    }

    async function submit() {
      // checkFormData(user, userData, teacherData);
      // console.log(user, userData, teacherData, userAgreement.value, personalDataAgreement.value, (user.password === confirmPassword.value && user.password !== null))
      // const resolve = await fetch('http://localhost:8000/auth/singup/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify({
      //     user: user,
      //     data: userData,
      //     teacher: teacherData,
      //   })
      // });
      const resolve = await axios.post('http://localhost:8000/singup/')


      // console.log(resolve);
    }

    return {
      user,
      userData,
      teacherData,
      userAgreement,
      personalDataAgreement,
      confirmPassword,
      registrationError,
      registrationErrors,
      submit,
    }
  }
});
