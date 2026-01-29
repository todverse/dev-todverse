<script setup>
import { useLanguage } from '~/composables/useLanguage'
const { t, data } = useLanguage()
</script>
<template>
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-mono md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="lg:py-24">
            <a class="group mb-2 inline-flex items-center text-sm font-bold leading-tight text-terminal-green hover:underline" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                <span class="opacity-70">{{ t('ui.back') }}</span>
            </a>
            <h1 class="text-4xl font-bold tracking-tight text-terminal-green sm:text-5xl glitch mt-4 ml-4" :data-text="t('ui.allProjectsTitle')">{{ t('ui.allProjectsTitle') }}</h1>
            
            <div class="mt-12 overflow-x-auto">
                <table id="content" class="w-full border-collapse text-left">
                    <thead class="sticky top-0 z-10 border-b border-terminal-green/20 bg-terminal-bg/80 px-6 py-5 backdrop-blur">
                        <tr>
                            <th class="py-4 pr-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">{{ t('ui.year') }}</th>
                            <th class="py-4 pr-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">{{ t('ui.project') }}</th>
                            <th class="hidden py-4 pr-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 lg:table-cell">{{ t('ui.builtWith') }}</th>
                            <th class="hidden py-4 pr-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 lg:table-cell">{{ t('ui.description') }}</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-200">
                        <tr v-for="project in data.projects" :key="project.name" class="border-b border-terminal-green/10 last:border-none group hover:bg-terminal-green/[0.02] transition-colors">
                            <td class="py-4 pr-4 align-top text-xs opacity-50 font-mono">
                                {{ project.year }}
                            </td>
                            <td class="py-4 pr-4 align-top text-sm">
                                <a class="inline-flex items-center gap-1 font-bold text-terminal-cyan hover:text-terminal-green transition-colors group/link glitchSmall" :data-text="project.name" :href="project.link" target="_blank" rel="noreferrer noopener">
                                    {{ project.name }}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </a>
                            </td>
                            <td class="hidden py-4 pr-4 align-top text-xs lg:table-cell">
                                <ul v-if="project.stack" class="flex flex-wrap gap-2">
                                    <li v-for="stack in project.stack" :key="stack">
                                        <span class="px-2 py-0.5 border border-terminal-green/30 text-terminal-green/80 rounded bg-terminal-green/5 group-hover:bg-terminal-green/10 transition-colors">
                                            --{{ stack.toLowerCase().replace(/\s+/g, '-') }}
                                        </span>
                                    </li>
                                </ul>
                            </td>
                            <td class="hidden py-4 max-w-xs pr-12 align-top text-xs lg:table-cell text-slate-400 leading-relaxed font-mono">
                                {{ project.desc }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.glitchSmall {
  position: relative;
  display: inline-flex;
}
.glitchSmall:hover::before,
.glitchSmall:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
}
.glitchSmall:hover::before {
  left: 1px;
  text-shadow: -1px 0 #ff00c1;
  clip: rect(10px, 999px, 20px, 0);
  animation: glitch-anim 2s infinite linear alternate-reverse;
}
.glitchSmall:hover::after {
  left: -1px;
  text-shadow: -1px 0 #00fff9;
  clip: rect(20px, 9999px, 30px, 0);
  animation: glitch-anim2 1.5s infinite linear alternate-reverse;
}
</style>
