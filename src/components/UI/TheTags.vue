<template>
  <div class="tags">
    <a href="#" v-for="(tag, index) in tagsList" :key="index">{{ tag }}</a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tagsList: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/UI/_tags";
</style>
