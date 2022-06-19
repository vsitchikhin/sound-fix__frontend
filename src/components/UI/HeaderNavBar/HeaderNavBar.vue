<template>
  <div class="header-nav-bar">
    <div class="header-nav-bar__nav">
      <a href="#" class="header-nav-bar__link">О нас</a>
      <a href="#" class="header-nav-bar__link">Преподаватели</a>
      <a href="#" class="header-nav-bar__link">Контакты</a>
      <a href="#" class="header-nav-bar__link">Подписка</a>
    </div>

    <div class="header-nav-bar__sing-in">
      <a href="#" class="header-nav-bar__log-in" @click.prevent="gotoLogIn"><img src="/svgIcons/singIcon.svg" alt="" class="header-nav-bar__log-in--icon">Войти</a>
      <img src="/svgIcons/slashDelimiterIcon.svg" alt="" class="header-nav-bar__sing-in--delimiter-icon">
      <a href="#" class="header-nav-bar__sing-up" @click.prevent="gotoSingIn">Зарегистрироваться</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    function gotoLogIn() {
      router.push({name: 'login'});
    }

    function gotoSingIn() {
      router.push({name: 'singup'});
    }

    return {
      gotoLogIn,
      gotoSingIn,
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
  }
</style>
