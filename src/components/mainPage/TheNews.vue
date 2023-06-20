<template>
  <div class="news">
    <div class="news__container _container">
      <TheMainTitle class="mb-24" :title="'IT va Texnologiya'" :subtitle="'yangiliklar'" />
      <div class="sliderWrapper">
        <Splide
          :options="{
            perPage : 1,
            type  : 'loop',
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 5000,
          }"
          class="newsSlider"
        >
          <SplideSlide class="newsSlider__slide" v-for="(slide, index) in newsSlides" :key="index">
            <div class="newsSlider__img">
              <img :src="slide.image" :alt="slide.title" />
            </div>
            <div class="newsSlider__content">
              <div class="newsSlider__content-inner">
                <p class="newsSlider__title mb-2">
                  <a href="#">{{ slide.title }}</a>
                </p>
                <p class="newsSlider__text mb-12">{{ slide.text }}</p>
                <a href="#" class="newsSlider__link">
                  Read More
                  <TheIcon :name="'caret-right'" />
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
import TheMainTitle from "@/components/UI/TheMainTitle.vue"
import TheIcon from "@/components/UI/TheIcon.vue";

const newsSlides = [
  {
    title: 'Samsung Develops New 5G Radio Technology for Efficient 5G Deployments',
    text: 'New Samsung technology doubles bandwidth support of its mid-band portfolio, helping operators minimize hardware needs and simplify 5G rollouts. People who are good with money look for quality over quantity',
    image: '../public/news/1.jpg'
  },
  {
    title: 'An Eckhart Tolle Quote That Relaxes My Entire Being',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    image: '../public/news/1.jpg'
  },
  {
    title: 'Dependency Confusion: How I Hacked Into Apple, Microsoft and Dozens of Other ',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    image: '../public/news/1.jpg'
  }
]
</script>

<style scoped lang="scss">
@import "@/assets/styles/mainPage/_news";

</style>
