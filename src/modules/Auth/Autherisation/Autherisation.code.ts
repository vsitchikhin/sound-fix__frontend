import { defineComponent, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { AutherisationService } from "./service/autherisation.service";
import { User } from './Autherisation.types';

export default defineComponent({
  setup() {
    const autherisationService = new AutherisationService();
    const router = useRouter();
    const user = new User();

    function gotoRegistration() {
      router.push({name: 'singup'});
    }

    async function signIn() {
      let auterisated = await autherisationService.autherisateUser(user);
      if (typeof auterisated !== 'string') {
        router.push({name: 'main'});
      }
    }

    return {
      user,
      gotoRegistration,
      signIn,
    }
  }
})
