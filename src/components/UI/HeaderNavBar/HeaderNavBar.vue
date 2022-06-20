<template>
  <div class="header-nav-bar">
    <div class="header-nav-bar__nav">
      <a href="#" class="header-nav-bar__link">О нас</a>
      <a href="#" class="header-nav-bar__link">Преподаватели</a>
      <a href="#" class="header-nav-bar__link">Контакты</a>
      <a href="#" class="header-nav-bar__link">Подписка</a>
    </div>

    <div v-if="showSignIn" class="header-nav-bar__sing-in">
      <a href="#" class="header-nav-bar__log-in" @click.prevent="gotoLogIn">
        <img src="/svgIcons/singIcon.svg" alt="" class="header-nav-bar__log-in--icon">
        Войти
      </a>
      <img src="/svgIcons/slashDelimiterIcon.svg" alt="" class="header-nav-bar__sing-in--delimiter-icon">
      <a href="#" class="header-nav-bar__sing-up" @click.prevent="gotoSingIn">Зарегистрироваться</a>
    </div>
    <div v-else class="header-nav-bar__user">
      <p class="header-nav-bar__user--name">{{user.name}}</p>
      <p class="header-nav-bar__user--name">{{user.surname}}</p>
      <p class="header-nav-bar__user--type">{{accountType}}</p>
      <a class="header-nav-bar__user--exit" @click="exit">Выйти</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { AutherisationService } from "src/modules/Auth/Autherisation/service/autherisation.service";

export default defineComponent({
  setup() {
    const router = useRouter();

    const autherisation = new AutherisationService();
    const user = ref(autherisation.getUser())
    const showSignIn = ref(user.value.name === null || user.value.surname === null);
    const accountType = ref(user.value.accountType)

    switch(accountType.value) {
      case 1: {
        accountType.value = 'логопед';
        break;
      }
      case 2: {
        accountType.value = 'родитель';
        break;
      }
      case 3: {
        accountType.value = 'ребёнок';
        break;
      }
    }

    function exit() {
      autherisation.exit();
      showSignIn.value = true
    }

    function gotoLogIn() {
      router.push({name: 'login'});
    }

    function gotoSingIn() {
      router.push({name: 'singup'});
    }

    return {
      gotoLogIn,
      gotoSingIn,
      showSignIn,
      user,
      accountType,
      exit,
    }
  }
});
</script>

<style scoped lang="scss">
  @import "src/css/variables";
  .header-nav-bar {
    width: 50%;
    display: flex;
    position: absolute;
    top: 20px;
    left: 28%;

    &__link {
      font-size: 20px;
      font-weight: 600;
      color: $log-main-font;
      text-decoration: none;
      margin-right: 80px;
      transition: .4s;
      border-bottom: 3px solid $log-main-font;

    }

    &__link:hover,
    &__log-in:hover,
    &__sing-up:hover {
      color: $log-main-link;
      transition: .4s;
    }

    &__link:hover {
      border-bottom: 3px solid $log-main-link;
    }

    &__sing-in {
      position: absolute;
      right: -264px;

      &--delimiter-icon {
        position: absolute;
        top: 4px;
      }
    }

    &__log-in,
    &__sing-up {
      font-size: 20px;
      font-weight: 700;
      color: $log-main-font;
      text-decoration: none;
      transition: .4s;

      &--icon {
        position: relative;
        top: 4px;
        right: 4px;
      }
    }

    &__sing-up {
      margin-left: 16px;
    }

    &__log-in {
      margin-right: 4px;
    }

    &__user {
      width: 100px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 700;
      color: $log-main-font;
      position: relative;
      right: -40px;


      &--name,
      &--type,
      &--exit {
        margin-right: 20px;
      }

      &--name {

      }

      &--type {
        font-size: 14px;
        font-weight: 400;
        position: absolute;
        margin: 0;
        bottom: 0;
        left: 84px;
      }

      &--exit {
        font-size: 20px;
        font-weight: 600;
        color: $log-main-font;
        cursor: pointer;
        text-decoration: none;
        margin-right: 80px;
        transition: .4s;
      }

      &--exit:hover {
        color: $log-main-link;
        transition: .4s;
      }
    }
  }
</style>
