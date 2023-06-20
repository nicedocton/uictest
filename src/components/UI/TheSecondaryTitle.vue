<template>
  <div class="secondaryTitle flex justify-between items-center">
    <h3 class="h3">{{ props.title }}</h3>
    <a :href="props.link" class="link">Browse all <TheIcon :name="'caret-right'" /></a>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue/dist/vue";
import TheIcon from "@/components/UI/TheIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/UI/_secondaryTitle";
</style>
