<template>
  <div class="sing-up">
    <registration />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Registration from '/src/modules/Auth/Registration/Registration.vue';

export default defineComponent({
  components: { Registration, },


})
</script>

<style scoped lang="scss">

</style>
