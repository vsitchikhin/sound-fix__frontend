import { defineComponent, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { Passport, RegistrationError, Teacher, User, UserData } from './Registration.types';
import { RegistrationService } from './service/registration.service';

export default defineComponent({
  setup() {
    const router = useRouter();

    const registrationService = new RegistrationService()

    const user = new User();
    const user_data = new UserData();
    const teacher = new Teacher();
    const passport = new Passport();

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
      return (passport.passport_numbers !== null
        && passport.passport_organ !== null
        && passport.issue_date !== null
        && passport.subdivision_code !== null);
    }

    function checkFormData(user: User, data: UserData, teacher: Teacher, passport: Passport): void {
      registrationError.value = false;
      registrationErrors.length = 0;

      const isValidEmail = emailValidate(user_data.email);
      const isValidPassword = passwordValidation(user_data.password);
      if (user_data.account_type === 'notStated' || !isValidEmail || !isValidPassword) {
        registrationErrors.push({error: 'UserData', title: 'Не правильно введены email или пароль, или не выбран тип аккаунта'});
      }

      const isValidPassport = passportValidation(passport);
      const isValidDate = typeof user.birth_date === 'string' && (user.birth_date.length === 10 || user.birth_date.length === 8);
      const isValidName = typeof user.name === 'string' && user.name.length > 1;
      const isValidSurname = typeof user.surname === 'string' && user.surname.length > 1;
      if (!isValidPassport || !isValidDate || !isValidName || !isValidSurname) {
        registrationErrors.push({error: 'User', title: 'Не правильно введены данные'})
      }

      if (user_data.account_type == 'teacher') {
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

    function submit() {
      checkFormData(user, user_data, teacher, passport);
      switch (user_data.account_type) {
        case 'teacher': {
          user_data.account_type = 1;
          break;
        }
        case 'parent': {
          user_data.account_type = 2;
          break;
        }
        case 'child': {
          user_data.account_type = 3;
          break;
        }
      }
      let body: object | string = {
        user,
        user_data,
        teacher,
        passport,
      }
      body = JSON.stringify(body);

      registrationService.createNewUser(body);
      router.push({name: 'login'});
    }

    return {
      user,
      user_data,
      teacher,
      passport,
      userAgreement,
      personalDataAgreement,
      confirmPassword,
      registrationError,
      registrationErrors,
      submit,
    }
  }
});
