<template>
    <div class="main  ">

   <Swiper 
      :modules="[SwiperNavigation,Pagination]"
      :slides-per-view="3"
      :loop="true"
      :freeMode="true"
      :spaceBetween="30"
      :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
      :navigation="true"
      :draggable="true"
      class="swiper"
    >
   
    <swiper-slide class="col1"><img src="assets\pic1.jpeg" alt=""></swiper-slide>
    <swiper-slide class="col2"><img src="assets\pic2.jpeg" alt=""></swiper-slide><swiper-slide class="col3"><img src="assets\pic3.jpeg" alt=""></swiper-slide>
    <swiper-slide class="col4"><img src="assets\pic5.jpeg" alt=""></swiper-slide><swiper-slide class="col5">Slide 5</swiper-slide>
    <swiper-slide class="col6">Slide 6</swiper-slide><swiper-slide class="col7">Slide 7</swiper-slide>
    <swiper-slide class="col8">Slide 8</swiper-slide><swiper-slide class="col9">Slide 9</swiper-slide>
      
    </Swiper>
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
display: flex;
height: 28vh;
background-size: cover;
background-size: auto;
}
</style>
<script setup>
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import {Pagination} from "swiper/modules";
  const modules=[
    Pagination
  ];

</script>