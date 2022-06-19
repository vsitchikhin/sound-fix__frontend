<template>
  <div class="footer-info">
    <img src="/info.svg" alt="" class="footer-info__svg">
  </div>
</template>

<script>
export default {
  name: "FooterInfo"
}
</script>

<style scoped lang="scss">
  @import "src/css/variables";

  .footer-info {
    height: 60px;
    background-color: $log-footer-bg;

    &__svg {
      width: 600px;
      margin-left: 44px;
      margin-top: 24px;
    }
  }
</style>
