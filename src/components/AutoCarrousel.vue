<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper/modules'

defineProps({
  images: {
    type: Array,
    required: true
  },
  spaceBetween: {
    type: Number,
    default: 30
  },
  centeredSlides: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Object,
    default: () => ({
      delay: 4000,
      disableOnInteraction: false
    })
  },
  pagination: {
    type: Object,
    default: () => ({
      clickable: true
    })
  }
})

const modules = [Autoplay, Pagination]
</script>

<template>
  <swiper
    :spaceBetween="spaceBetween"
    :centeredSlides="centeredSlides"
    :autoplay="autoplay"
    :pagination="pagination"
    :modules="modules"
    class="max-h-[45rem] w-full"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="image slide" class="w-full min-h-[30rem]" />
    </swiper-slide>
  </swiper>
</template>

<style scoped></style>
