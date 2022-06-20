<template>
  <div class="login">
    <autherisation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Autherisation from 'src/modules/Auth/Autherisation/Autherisation.vue';

export default defineComponent({
  components: { Autherisation }
})
</script>

<style scoped>

</style>
