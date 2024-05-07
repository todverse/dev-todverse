<script setup>
import Header from '~/components/Header.vue';
import mainInfo from '~/components/mainInfo.vue';
</script>
<template>
  <div class="bg-slate-900 text-slate-100">
    <div class="w-auto mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">
        <Header></Header>
        <MainInfo></MainInfo>
      </div>
    </div>
  </div>
</template>
