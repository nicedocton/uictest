<template>
  <div class="trends">
    <div class="trends__container _container">
      <TheMainTitle :title="Title" :subtitle="Subtitle" class="mb-16" />
      <div class="trends__wrapper flex justify-between">
        <div class="trends__main">
          <div class="trend__item">
            <div class="trend__item-img mb-7">
              <a href="#">
                <img :src="mainTrend.image" :alt="mainTrend.title" />
              </a>
            </div>
            <div class="trend__item-content flex flex-col">
              <div class="trend__item-tags mb-5">
                <TheTags :tagsList="mainTrend.tags" class="text-sm" />
              </div>
              <div class="trend__item-title mb-1">
                <a href="#">{{ mainTrend.title }}</a>
              </div>
              <p class="trend__item-text mb-5">{{ mainTrend.text }}</p>
              <p class="trend__item-date">{{ mainTrend.date }} · O`qish davomiyligi {{ mainTrend.time }} daqiqa</p>
            </div>
          </div>
        </div>
        <div class="trends__list flex flex-col gap-12">
          <div class="trend__item flex gap-6" v-for="(item, index) in trendsList" :key="index">
            <div class="trend__item-content flex flex-col">
              <div class="trend__item-tags mb-4">
                <TheTags :tagsList="item.tags" class="text-xs" />
              </div>
              <div class="trend__item-title mb-4">
                <a href="#">{{ item.title }}</a>
              </div>
              <p class="trend__item-date">{{ item.date }} · O`qish davomiyligi {{ item.time }} daqiqa</p>
            </div>
            <div class="trend__item-img">
              <a href="#">
                <img :src="item.image" :alt="item.title" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMainTitle from '@/components/UI/TheMainTitle.vue';
import TheTags from "@/components/UI/TheTags.vue";
const Title = "Trending on Interest";
const Subtitle = "from all categories";

const mainTrend = {
  title: '7 things people who are good with money never buy',
  text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
  date: 'April 5',
  time: 6,
  tags: ['Texnologiya', 'Biznes'],
  image: 'trends/1.jpg'
};

const trendsList = [
  {
    title: 'An Eckhart Tolle Quote That Relaxes My Entire Being',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 4,
    tags: ['Sohafiy', 'Biznes'],
    image: 'trends/2.jpg'
  },
  {
    title: 'Dependency Confusion: How I Hacked Into Apple, Microsoft and Dozens of Other ',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 5,
    tags: ['Texnologiya', 'Grandlar'],
    image: 'trends/3.jpg'
  },
  {
    title: '6 UX Design Portfolio Builders You Should Try [From Low Effort...',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 5,
    tags: ['Texnologiya', 'Grandlar'],
    image: 'trends/4.jpg'
  },
  {
    title: 'An Eckhart Tolle Quote That Relaxes My Entire Being',
    text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
    date: 'April 5',
    time: 4,
    tags: ['Sohafiy', 'Biznes'],
    image: 'trends/5.jpg'
  }
]

</script>

<style scoped lang="scss">
@import "@/assets/styles/mainPage/_trends";
</style>
