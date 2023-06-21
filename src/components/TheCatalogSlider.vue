<template>
  <div class="catalogSlider">
    <div class="catalogSlider__container _container">
      <TheSecondaryTitle class="mb-7" :title="props.title" :link="props.link" />
      <div class="sliderWrapper">
        <Splide
          :options="{
            perPage : 4,
            perMove: 1,
            type  : 'loop',
            arrows: true,
            pagination: false,
            autoplay: false,
            gap: 20
          }"
        >
          <SplideSlide class="slide" v-for="(slide, index) in props.catalog" :key="index">
            <div class="slide__img">
              <img :src="slide.image" :alt="slide.title" />
            </div>
            <div class="slide__content px-4 py-5">
              <TheTags class="mb-4" :tagsList="slide.tags" />
              <p class="slide__title mb-1"><a href="#">{{ slide.title }}</a></p>
              <p class="slide__text mb-4">{{ slide.text }}</p>
              <p class="slide__date">{{ slide.date }} · O`qish davomiyligi {{ slide.time }} daqiqa</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@/assets/styles/_splide.scss';
import TheSecondaryTitle from "@/components/UI/TheSecondaryTitle.vue";
import TheTags from "@/components/UI/TheTags.vue";

const props = defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
  catalog: { type: Object, required: true }
})

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/_catalogSlider";
</style>
