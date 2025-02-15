<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper/modules'

const modules = [Autoplay, Pagination]
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="max-h-[45rem] w-full"
  >
    <swiper-slide>
      <img src="../assets/images/image_01.webp" alt="image skate" class="w-full min-h-[30rem]" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/image_02.webp" alt="image skate" class="w-full min-h-[30rem]" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/image_03.webp" alt="image skate" class="w-full min-h-[30rem]" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/image_04.webp" alt="image skate" class="w-full min-h-[30rem]" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/image_05.webp" alt="image skate" class="w-full min-h-[30rem]" />
    </swiper-slide>
  </swiper>
</template>

<style scoped></style>
