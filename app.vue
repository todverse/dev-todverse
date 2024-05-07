<script setup>
useServerSeoMeta({
  title: 'todverse',
  ogTitle: 'todverse',
  description: 'This is the website of the developer Maxim. I make web applications. I develop both the server part and the client part.',
  ogDescription: 'This is the website of the developer Maxim. I make web applications. I develop both the server part and the client part.',
  ogImage: 'https://dev-todverse.vercel.app/imgg.png',
  image: 'https://dev-todverse.vercel.app/imgg.png',
  twitterCard: 'summary_large_image'
})
useHead({
  bodyAttrs: {
    class: 'bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
