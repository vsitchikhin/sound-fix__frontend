<template>
  <div class="footer-main">
    <header-logo class="footer-main__logo" />
    <p class="footer-main__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid amet assumenda, consequuntur, debitis dicta ea ex exercitationem explicabo hic illo molestias nostrum optio rem soluta sunt.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLogo from "components/UI/HeaderLogo/HeaderLogo.vue";

export default defineComponent({
  components: {
    HeaderLogo,
  }
});
</script>

<style scoped lang="scss">
  @import "src/css/variables";
  .footer-main {
    width: 50%;
    background-color: $log-lighter-bg;

    &__logo {
      :deep(.header-logo__logo) {
        width: 220px;
        margin-top: 80px;
      }
    }

    &__text {
      margin-top: 20px;
      margin-left: 52px;
      font-size: 20px;
      font-weight: 400;
      color: $log-second-font;
      width: 75%;
    }
  }
</style>
