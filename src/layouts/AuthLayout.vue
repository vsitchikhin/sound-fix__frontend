<template>
  <header class="header">
    <header-logo />
    <header-auth-nav />
  </header>

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLogo from 'components/UI/HeaderLogo/HeaderLogo.vue';
import HeaderAuthNav from "components/UI/HeaderAuth/HeaderAuthNav.vue";


export default defineComponent({
  components: {
    HeaderLogo,
    HeaderAuthNav,
  },
});
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.header {
  display: block;
  width: 100%;
  height: 74px;
  background-color: $log-main-bg;
}
</style>
