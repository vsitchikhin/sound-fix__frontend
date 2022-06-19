<template>
  <div class="footer-contacts">
    <h1 class="footer-contacts__contact-header">Контактная информация</h1>
    <p class="footer-contacts__contacts">Электронная почта - <a href="#" class="footer-contacts__contacts--mail-link">vsitchikhin@gmail.com</a></p>
    <p class="footer-contacts__contacts">Телефон - *корпоративный номер*</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
@import "src/css/variables";
  .footer-contacts {
    background-color: $log-lighter-bg;
    width: 50%;
    color: $log-second-font;
    text-align: center;

    &__contact-header {
      font-size: 32px;
      font-weight: 600;
      height: 84px;
    }

    &__contacts {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 400;

      &--mail-link {
        color: $log-second-font;
        text-decoration: none;
        transition: .4s;
        border-bottom: 2px solid $log-second-font;
      }

      &--mail-link:hover {
        color: $log-main-link;
        border-bottom: 2px solid $log-main-link;
        transition: .4s;
      }
    }
  }
</style>
