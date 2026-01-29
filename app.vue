<script setup>
import { useLanguage } from '~/composables/useLanguage'
const { initLanguage, t, currentLang } = useLanguage()

onMounted(() => {
  initLanguage()
})

useHead({
  htmlAttrs: {
    class: 'bg-[#0a0a0a]',
    lang: currentLang
  },
  bodyAttrs: {
    class: 'bg-[#0a0a0a] leading-relaxed text-slate-200 antialiased selection:bg-terminal-green selection:text-black font-mono relative overflow-x-hidden',
  },
});

watchEffect(() => {
  useServerSeoMeta({
    title: t('seo.title'),
    ogTitle: t('seo.title'),
    description: t('seo.description'),
    ogDescription: t('seo.description'),
    ogImage: 'https://dev-todverse.vercel.app/imgg.png',
    image: 'https://dev-todverse.vercel.app/imgg.png',
    twitterCard: 'summary_large_image'
  })
})
</script>

<template>
  <div class="cursor"></div>
  <div class="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.02]">
    <div class="absolute inset-0 bg-scanline animate-scanline"></div>
    <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]"></div>
  </div>
  <div class="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" style="background-image: radial-gradient(#1e293b 0.5px, transparent 0.5px); background-size: 24px 24px;"></div>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

.bg-scanline {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 65, 0.05) 50%,
    transparent 100%
  );
  height: 100px;
  width: 100%;
}

.typing {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #00ff41;
  font-family: 'Fira Code', monospace;
  text-shadow: 0 0 12px rgba(0, 255, 65, 0.82);
}

.glitch {
  position: relative;
  display: inline-block;
}

.glitch:hover::before,
.glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
}

.glitch:hover::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch:hover::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 94px, 0); }
  20% { clip: rect(62px, 9999px, 42px, 0); }
  40% { clip: rect(2px, 9999px, 11px, 0); }
  60% { clip: rect(65px, 9999px, 56px, 0); }
  80% { clip: rect(96px, 9999px, 14px, 0); }
  100% { clip: rect(11px, 9999px, 73px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(1px, 9999px, 74px, 0); }
  25% { clip: rect(48px, 9999px, 22px, 0); }
  50% { clip: rect(10px, 9999px, 90px, 0); }
  75% { clip: rect(66px, 9999px, 33px, 0); }
  100% { clip: rect(82px, 9999px, 49px, 0); }
}

@keyframes typing {
  from { width: 0; }
}
    
@keyframes blink {
  50% { border-color: transparent }
}

html, body {
  background-color: #0a0a0a !important;
  color: #e2e8f0;
  /* cursor: url('/Normal.ani') 5 5, auto; */

}

</style>
