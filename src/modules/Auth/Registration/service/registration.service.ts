import { registrationStore } from "src/modules/Auth/Registration/service/registration.store";
import axios from "axios";
import { Service } from 'src/modules/service';

// TODO: сервис должен ходить за данными и отдавать их в стор
// стор просто сохраняет и обновляет данные
// сервис их получает.
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
