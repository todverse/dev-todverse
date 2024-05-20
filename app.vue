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


<style>
.typing {
  width: 11ch;
  animation: typing 2s steps(11), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid;
  font-family: monospace;
  font-size: 3em;
}

@keyframes typing {
  from {
    width: 0;
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>