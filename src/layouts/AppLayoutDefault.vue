<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {useLifecycleLogger} from "@/common/hooks/lifecycleLogger.ts";

useLifecycleLogger({name: "AppLayoutDefault"});
</script>

<template>
  <div class="page">
    <TheHeader/>
    <main class="app-layout-default-main pt-20 wrapper">
      <slot/>
    </main>
    <TheFooter/>
  </div>
</template>

<style lang="scss">

</style>
