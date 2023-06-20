<template>
  <div class="mainTitle" :class="[(props.alignLeft ? '_left' : ''), (props.alignRight ? '_right' : '')]">
    <p class="subtitle" v-if="subtitle">{{ props.subtitle }}</p>
    <h2 class="h2"><span>{{ props.title }}</span></h2>
  </div>
</template>

<script setup lang="ts">
import {defineProps, PropType} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  alignLeft: {
    type: Boolean,
    required: false
  },
  alignRight: {
    type: Boolean,
    required: false
  }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/UI/_mainTitle";
</style>
