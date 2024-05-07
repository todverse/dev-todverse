<script setup>
import Header from '~/components/Header.vue';
import mainInfo from '~/components/mainInfo.vue';
import {onMounted, ref} from 'vue'
const x = ref(0)
const y = ref(0)
onMounted(() => {
  console.log('Write me in telegram - @todverse😉')
  document.body.addEventListener('mousemove', (e) => {
    x.value = e.pageX
    y.value = e.pageY
  })
})
</script>
<template>
  <div class="group/spotlight relative">
    <div 
        class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" 
        :style="{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(118 255 119 / 10%), transparent 80%)`
        }"></div>

    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">
        <Header></Header>
        <MainInfo></MainInfo>
      </div>
    </div>
  </div>
</template>
