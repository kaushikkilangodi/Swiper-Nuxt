<template>
  <div>
    <swiper 
    :modules="[SwiperNavigation,Pagination]"
      :slides-per-view="3"
      :loop="true"
      :freeMode="true"
      :spaceBetween="30"
      :pagination="{
      clickable: true,
    }"
      :navigation="true"
      :draggable="true"
      class="swiper">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="swiper-item">
          {{ slide.title }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style>
body{
  margin: 0;
  padding: 0;
  }
  .main{
  
      align-items: center;
      justify-content: center;
      margin-top: 20%;
      
      
  }
  
  .swiper-slide{
  font-size: 20px;
  text-align: center;
  background-color: antiquewhite;
  display: flex;
  height: 28vh;
  object-fit: cover;
  }
  
  
      
  
  
  </style>
  <script setup>
    import { Swiper, SwiperSlide} from 'swiper/vue';
    import {Pagination} from "swiper/modules";
    const modules=[
      Pagination
    ];
  
  </script>