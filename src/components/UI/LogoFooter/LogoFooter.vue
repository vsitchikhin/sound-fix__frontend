<template>
  <div class="footer">
    <div class="logo-footer">
    <footer-main />
    <img src="/Line.svg" alt="" class="logo-footer__line">
    <footer-contacts />
    </div>
    <footer-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterMain from './FooterMain/FooterMain.vue';
import FooterInfo from './FooterInfo/FooterInfo.vue';
import FooterContacts from './FooterContacts/FooterContacts.vue';

export default defineComponent({
  components: {
    FooterContacts,
    FooterInfo,
    FooterMain,
  },

  setup() {

  }
});
</script>

<style scoped lang="scss">
  @import "src/css/variables";

  .logo-footer {
    height: 260px;
    //position: absolute;
    //bottom: 0;
    background-color: $log-footer-bg;
    width: 100%;
    display: flex;

    &__line {
      height: 216px;
      z-index: 1000;
      margin-top: 20px;
      background-color: $log-lighter-bg;
      position: absolute;
      left: 50%
    }
  }
</style>
