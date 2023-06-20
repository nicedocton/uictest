<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__socials mb-9">
        <a href="#"><TheIcon :name="'instagram'" /></a>
        <a href="#"><TheIcon :name="'telegram'" /></a>
        <a href="#"><TheIcon :name="'twitter'" /></a>
      </div>
      <div class="footer__links">
        <a href="#" v-for="(link, index) in footerLinks">{{ link.name }}</a>
      </div>

    </div>
  </footer>
</template>

<script lang="ts" setup>
import TheIcon from "@/components/UI/TheIcon.vue";

const footerLinks = [
  {
    name: 'Biz haqimizda'
  },
  {
    name: 'Foydalanish qoidalari'
  },
  {
    name: 'Savol va takliflar'
  },
]

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/_footer";
</style>
