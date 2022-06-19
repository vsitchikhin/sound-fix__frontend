import { registrationStore } from "src/modules/Auth/Registration/service/registration.store";
import { Service } from 'src/modules/service';

// TODO: сервис должен ходить за данными и отдавать их в стор
// стор просто сохраняет и обновляет данные
// сервис их получает.
export class registrationService extends Service {
  private store;

  public constructor() {
    super();
    this.store = registrationStore();
  }

  // TODO: отправить данные юзера на сервер
}
