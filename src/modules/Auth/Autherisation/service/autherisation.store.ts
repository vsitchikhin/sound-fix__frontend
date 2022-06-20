import { defineStore } from 'pinia';
import { LoginnedUser } from '../Autherisation.types';

export const autherisationStore = defineStore({
  id: 'autherisation',
  state: () => ({
    user: {
      id: null,
      name: null,
      surname: null,
      patronymic: null,
      birthDate: null,
      age: null,
      accountType: null,
      email: null,
      password: null
    } as LoginnedUser,
  }),

  actions: {
    SET_AUTHERISATED_USER(payload: LoginnedUser) {
      this.user = payload;
    }
  },

  getters: {},
})
