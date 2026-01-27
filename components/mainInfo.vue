<script setup>
import aboutme from '~/data/aboutme.json'
let exp = aboutme.experience.slice(0, 3)
let proj = aboutme.projects.slice(0, 4)

import {onMounted} from 'vue'
onMounted(() => {
    let about = document.querySelectorAll("a[href='#about']")[0]
    let expLink = document.querySelectorAll("a[href='#experience']")[0]
    let projLink = document.querySelectorAll("a[href='#project']")[0]
    
    window.addEventListener('scroll', () => {
        let sections = ['about', 'experience', 'project']
        let current = ''
        
        for (let section of sections) {
            let el = document.getElementById(section)
            if (el) {
                let rect = el.getBoundingClientRect()
                if (rect.top <= 100) {
                    current = section
                }
            }
        }
        
        [about, expLink, projLink].forEach(el => el?.classList.remove('active'))
        
        if (current === 'about') about?.classList.add('active')
        if (current === 'experience') expLink?.classList.add('active')
        if (current === 'project') projLink?.classList.add('active')
    })
})
</script>
<template>
    <main class="pt-24 lg:w-1/2 lg:py-24">
        <!-- About Section -->
        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-terminal-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-terminal-green lg:sr-only glitch" data-text="About">About</h2>
            </div>
            <div class="space-y-4 text-slate-200 leading-relaxed font-mono text-sm sm:text-base">
                <p v-for="(text, index) in aboutme.aboutme_paragraphs" :key="index" class="relative pl-6">
                    <span class="absolute left-0 text-terminal-green/50 italic">></span>
                    {{ text }}
                </p>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0a]/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-terminal-green lg:sr-only glitch" data-text="Experience">Experience</h2>
            </div>
            
            <div class="group/list">
                <div v-for="item in exp" :key="item.company" class="mb-12 group relative">
                    <!-- Subtle Glow on Hover -->
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-terminal-green/[0.03] lg:group-hover:shadow-[0_0_20px_rgba(0,255,65,0.05)]"></div>
                    
                    <div class="relative z-10 grid sm:grid-cols-8 gap-4">
                        <header class="sm:col-span-2 text-[10px] font-mono uppercase tracking-widest text-[#00ff41]/60 pt-1">
                            {{ item.time }}
                        </header>
                        <div class="sm:col-span-6">
                            <h3 class="font-bold text-[#00ff41] group-hover:text-terminal-cyan transition-colors">
                                <a :href="item.link" target="_blank" class="inline-flex items-center gap-1 group/link glitchSmall" :data-text="item.post + ' · ' + item.company">
                                    {{ item.post }} · {{ item.company }}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </a>
                            </h3>
                            <p class="mt-2 text-sm text-slate-100 border-l-2 border-[#00ff41]/40 pl-4 leading-relaxed bg-[#0a0a0a]/40">
                                {{ item.desc }}
                            </p>
                            <ul class="mt-4 flex flex-wrap gap-2">
                                <li v-for="stack in item.stack" :key="stack">
                                    <span class="px-2 py-0.5 text-[10px] font-mono border border-[#00ff41]/50 text-[#00ff41] rounded bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                                        --{{ stack.toLowerCase().replace(/\s+/g, '-') }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <a v-if="aboutme.resume_link" :href="aboutme.resume_link" target="_blank" class="inline-flex items-center gap-2 text-sm font-mono text-terminal-green hover:underline">
                    <span class="text-terminal-green/70">cat</span> <span class="text-slate-200">resume.pdf</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="project" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-terminal-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-terminal-green lg:sr-only glitch" data-text="Projects">Projects</h2>
            </div>

            <div class="grid gap-8">
                <div v-for="project in proj" :key="project.name" class="group relative p-4 border border-terminal-green/20 bg-terminal-green/[0.03] hover:bg-terminal-green/[0.08] hover:border-terminal-green/50 transition-all rounded-sm overflow-hidden shadow-neon-green/5">
                    <!-- Corner accent -->
                    <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-terminal-green/40 group-hover:border-terminal-green/100 transition-colors"></div>
                    
                    <div class="flex flex-col sm:flex-row gap-6">
                        <div class="sm:w-1/3">
                            <div v-if="project.src" class="aspect-video overflow-hidden border border-terminal-green/20 rounded-sm">
                                <img :src="'/' + project.src" :alt="project.alt" class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-105 group-hover:scale-100">
                            </div>
                            <div v-else class="aspect-video bg-terminal-green/10 border border-dashed border-terminal-green/30 flex items-center justify-center">
                                <span class="text-[10px] font-mono opacity-40 uppercase">No_Preview</span>
                            </div>
                        </div>
                        <div class="sm:w-2/2">
                            <h3 class="font-bold text-terminal-cyan group-hover:text-terminal-green transition-colors">
                                <a :href="project.link" target="_blank" class="inline-flex items-center gap-2 group/link glitchSmall" :data-text="project.name">
                                    {{ project.name }}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </a>
                            </h3>
                            <p class="mt-2 text-xs text-slate-200 font-mono line-clamp-3 leading-relaxed">
                                {{ project.desc }}
                            </p>
                            <div class="mt-4 flex flex-wrap gap-2">
                                <span v-for="stack in project.stack" :key="stack" class="text-[9px] font-mono text-terminal-green/70">
                                    #{{ stack.toLowerCase().replace(/\s+/g, '') }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="/projects" class="group inline-flex items-center gap-2 p-3 border-2 border-terminal-green/30 hover:border-terminal-green hover:bg-terminal-green/10 transition-all text-sm font-mono text-terminal-green shadow-neon-green/10">
                    <span class="group-hover:animate-pulse">RUN</span> --all-projects
                </a>
            </div>
        </section>
    </main>
</template>
