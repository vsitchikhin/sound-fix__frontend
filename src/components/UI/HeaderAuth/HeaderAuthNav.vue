<template>
  <div class="header-auth-nav">
    <div class="header-auth-nav__nav">
      <a href="#" class="header-auth-nav__link">Политика конфиденциальности</a>
      <a href="#" class="header-auth-nav__link">Пользовательское соглашение</a>
      <a href="#" class="header-auth-nav__link">Контакты</a>
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
      console.log('event~')
      router.push('/Auth/Authorisation');
    }

    function gotoSingIn() {
      console.log('event~')
      router.push('/Auth/Registration');
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
  .header-auth-nav {
    width: 85%;
    display: flex;
    position: absolute;
    top: 20px;
    left: 25%;

    &__link {
      font-size: 20px;
      font-weight: 600;
      color: $log-main-font;
      text-decoration: none;
      margin-right: 80px;
      transition: .4s;
      border-bottom: 3px solid $log-main-font;

    }

    &__link:hover {
      color: $log-main-link;
      transition: .4s;
      border-bottom: 3px solid $log-main-link;
    }
  }
</style>
