<template>
  <div class="events">
    <div class="events__container _container">
      <TheMainTitle :alignLeft="true" :title="'Tadbirlar'" class="mb-16"/>
      <div class="events__list">
        <div v-for="(event, index) in eventsList" :key="index" class="events__item events-item">
          <div class="events-item__img">
            <a href="#">
              <img :alt="event.title" :src="event.image" />
            </a>
          </div>
          <div class="events-item__content">
            <div class="events-item__tags">
              <TheTags :tagsList="event.tags" class="text-xs" />
            </div>
            <div class="events-item__title">
              <a href="#">{{ event.title }}</a>
            </div>
            <div class="events-item__date">
              <span v-if="event.time"><TheIcon :name="'clock'" /> {{ event.time }}</span>
              <span v-if="event.isOnline"><TheIcon :name="'online'" /> Online</span>
              <span v-if="event.plays"><TheIcon :name="'geo'" /> {{ event.plays }}</span>
              <span v-if="event.isFree"><TheIcon :name="'ticket'" /> Bepul</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheMainTitle from "@/components/UI/TheMainTitle.vue";
import TheIcon from "@/components/UI/TheIcon.vue";
import TheTags from "@/components/UI/TheTags.vue";

const eventsList = [
  {
    image: "events/1.jpg",
    title: "ICDE 2021: 15th International Conference on Education and",
    tags: ["CONFERENCE"],
    time: "30 minut qoldi",
    isOnline: false,
    plays: "Toshkent",
    isFree: true
  },
  {
    image: "events/2.jpg",
    title: "Asia Pacific Conference on Sustainable Development",
    tags: ["MEETUP"],
    time: "30 Aprel, 2021",
    isOnline: true,
    isFree: true
  },
  {
    image: "events/3.jpg",
    title: "Innovations in Learning and Technology for the Workplace",
    tags: ["FORUM"],
    time: "1 kun qoldi",
    isOnline: true,
    isFree: true
  },
  {
    image: "events/4.jpg",
    title: "Software and mechanical engeenring meetup Moscow #10",
    tags: ["TRAINING"],
    time: "1 May, 2021",
    isOnline: false,
    plays: "Moskva, Rossiya",
    isFree: true
  },
]

</script>

<style lang="scss" scoped>
@import "@/assets/styles/mainPage/_events";
</style>
