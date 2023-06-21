<script setup lang="ts">
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
import TheHero from "@/components/mainPage/TheHero.vue";
import TheTrends from "@/components/mainPage/TheTrends.vue";
import TheCatalogSlider from "@/components/TheCatalogSlider.vue";
import TheNews from "@/components/mainPage/TheNews.vue";
import TheEvents from "@/components/mainPage/TheEvents.vue";

const catalogList = [
  {
    title: 'Zamonaviy bilimlar',
    link: '/',
    catalog: [
      {
        title: 'The Simple 40 Minute Morning Routine That...',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 6,
        tags: ['Texnologiya', 'Biznes'],
        image: '../public/catalog/1.jpg'
      },
      {
        title: 'I Tried Emailing Like a Man — And It Worked',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/2.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/3.jpg'
      },
      {
        title: 'The great bicycle boom of 2020',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/4.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/5.jpg'
      }
    ]
  },
  {
    title: 'Chet tillari',
    link: '/',
    catalog: [
      {
        title: 'The Simple 40 Minute Morning Routine That...',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 6,
        tags: ['Texnologiya', 'Biznes'],
        image: '../public/catalog/6.jpg'
      },
      {
        title: 'I Tried Emailing Like a Man — And It Worked',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/7.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/8.jpg'
      },
      {
        title: 'The great bicycle boom of 2020',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/1.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/2.jpg'
      }
    ]
  },
  {
    title: 'Grantlar',
    link: '/',
    catalog: [
      {
        title: 'The Simple 40 Minute Morning Routine That...',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 6,
        tags: ['Texnologiya', 'Biznes'],
        image: '../public/catalog/3.jpg'
      },
      {
        title: 'I Tried Emailing Like a Man — And It Worked',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/4.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/5.jpg'
      },
      {
        title: 'The great bicycle boom of 2020',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 4,
        tags: ['Sohafiy', 'Biznes'],
        image: '../public/catalog/6.jpg'
      },
      {
        title: 'Do This Now If You Want To Lose Weight Fast',
        text: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later. Dependency Confusion and Misconception',
        date: 'April 5',
        time: 5,
        tags: ['Texnologiya', 'Grandlar'],
        image: '../public/catalog/7.jpg'
      }
    ]
  }
]

</script>

<template>
  <AppLayoutDefault>
    <TheHero />
    <TheTrends />
    <div class="section py-10">
      <template v-for="(item, index) in catalogList" :key="index">
        <TheCatalogSlider class="mb-16 pb-2" :title="item.title" :link="item.link" :catalog="item.catalog" />
      </template>
    </div>
    <TheNews />
    <TheEvents />
  </AppLayoutDefault>
</template>

<style scoped>
.section {
  background-color: #1c1c1c;
}
</style>
