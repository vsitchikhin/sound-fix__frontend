import { autherisationStore } from "src/modules/Auth/Autherisation/service/autherisation.store";
import axios from 'axios';
import { Service } from 'src/modules/service';
import { User, LoginnedUser } from '../Autherisation.types';


export class AutherisationService extends Service {
  private store;

  public constructor() {
    super();
    this.store = autherisationStore();
  }

  getUser() {
    return this.store.user;
  }

  exit() {
    this.store.SET_AUTHERISATED_USER( {
      id: null,
      name: null,
      surname: null,
      patronymic: null,
      birthDate: null,
      age: null,
      accountType: null,
      email: null,
      password: null
    })
  }

  autherisateUser(body: User) {
    const response = axios.get(`http://localhost:4000/login?email=${body.email}&password=${body.password}`)
      .then(response => {
        const loginnedUser: LoginnedUser = {
            id: response.data.user_id || this.store.user.id,
            name: response.data.name || this.store.user.name,
            surname: response.data.surname || this.store.user.surname,
            patronymic: response.data.patronymic || this.store.user.patronymic,
            birthDate: response.data.birth_date || this.store.user.birthDate,
            age: response.data.age || this.store.user.age,
            accountType: response.data.account_type || this.store.user.accountType,
            email: response.data.email || this.store.user.email,
            password: response.data.password || this.store.user.password,
        }
        this.store.SET_AUTHERISATED_USER(loginnedUser);
        if (typeof response.data === 'string') {
          console.log(response.data)
        }
        return response.data;
      })
      .catch(err => {
        console.log(err)
      })
    return response;
  }
}
