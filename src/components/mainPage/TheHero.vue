<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__slider">
        <Splide
          :options="{
            perPage : 1,
            type  : 'loop',
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 50000,
          }"
          class="mySlider"
          :has-track="false"
        >
          <SplideTrack>
            <SplideSlide v-for="(slide, index) in heroSlides" :key="index">
              <div class="mySlider__img">
                <img :src="slide.image" :alt="slide.title" />
              </div>
              <div class="mySlider__content pb-8 mx-10">
                <div class="mySlider__tags mb-5">
                  <TheTags :tagsList="slide.tags" class="text-sm" />
                </div>
                <h2 class="mySlider__title"><a href="#">{{ slide.title }}</a></h2>
                <p class="mySlider__text mb-5">{{ slide.text }}</p>
                <p class="mySlider__date">{{ slide.date }} · O`qish davomiyligi {{ slide.time }} daqiqa</p>
              </div>
            </SplideSlide>
          </SplideTrack>

          <div class="splide__progress">
            <div class="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@/assets/styles/_splide.scss';
import TheTags from "@/components/UI/TheTags.vue";
const heroSlides = [
  {
    title: '7 things people who are good with money never buy',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 6,
    tags: ['Texnologiya', 'Biznes'],
    image: '../public/slider/1.jpg'
  },
  {
    title: 'An Eckhart Tolle Quote That Relaxes My Entire Being',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 4,
    tags: ['Sohafiy', 'Biznes'],
    image: '../public/slider/2.jpg'
  },
  {
    title: 'Dependency Confusion: How I Hacked Into Apple, Microsoft and Dozens of Other ',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 5,
    tags: ['Texnologiya', 'Grandlar'],
    image: '../public/slider/3.jpg'
  }
]
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mainPage/_hero";
</style>

<style lang="scss">
.hero__slider {
  .splide {
    position: relative;
    &__track {
      overflow: visible;
    }
    &__arrow {
      transform: translateY(0%);
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) -76.25%, #111111 80.72%);
      transition: opacity 0.1s ease-in-out;
      z-index: 2;
      border-radius: 0;
      svg {
        display: none;
      }
      &:after {
        display: none;
      }
      &--next {
        top: 0;
        left: calc((100% / 2) + (846px / 2));
        right: auto;
      }
      &--prev {
        top: 0;
        right: calc((100% / 2) + (846px / 2));
        left: auto;
      }
    }
    &__progress {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      &__bar {
        background-color: #B1B1B1;
        height: 2px;
      }
    }
  }
}
</style>
