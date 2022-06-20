import { registrationStore } from "src/modules/Auth/Registration/service/registration.store";
import axios from "axios";
import { Service } from 'src/modules/service';

export class RegistrationService extends Service {
  private store;

  public constructor() {
    super();
    this.store = registrationStore();
  }

  // TODO: отправить данные юзера на сервер
  createNewUser(body: JSON | string) {
    axios.post('http://localhost:4000/signup', body)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
