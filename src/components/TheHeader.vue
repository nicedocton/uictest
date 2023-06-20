<template>
  <header class="header fixed top-0 left-0 w-full">
    <div class="header__container _container mb-20 flex justify-between items-center gap-5 pt-5 pb-5">
      <div class="header__logo">
        <a href="#">
          <img src="@/assets/img/svg/logo.svg" alt="Interest" />
        </a>
      </div>
      <nav class="header__menu menu">
        <ul class="flex menu__list flex justify-between gap-5">
          <li><a href="#">Zamonaviy bilimlar</a></li>
          <li><a href="#">Grantlar</a></li>
          <li><a href="#">Chet tillari</a></li>
          <li><a href="#">Yangiliklar</a></li>
          <li><a href="#">Tadbir va konferensiyalar</a></li>
        </ul>
      </nav>
      <div class="header__search search" :class="focused ? '_active' : ''">
        <TheIcon class="search__icon" name="search" />
        <input type="text" class="search__input" placeholder="Search" @focus="onFocus" @blur="onBlur" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import TheIcon from "@/components/UI/TheIcon.vue";
import {ref} from "vue";

const focused = ref(false);

function onFocus () {
  focused.value = true;
}
function onBlur () {
  focused.value = false;
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/_header";
</style>
