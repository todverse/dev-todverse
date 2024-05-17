<script setup>
import aboutme from '~/data/aboutme.json'
let exp = []
let proj = []
for(let i = 0; i < 3; i++) {
    if(aboutme.experience[i]) {
        exp.push(aboutme.experience[i])
    }
}
for(let i = 0; i < 4; i++) {
    if(aboutme.projects[i]) {
        proj.push(aboutme.projects[i])
    }
}
import {onMounted} from 'vue'
onMounted(() => {
    let about = document.querySelectorAll("a[href='#about']")[0]
    let exp = document.querySelectorAll("a[href='#experience']")[0]
    let proj = document.querySelectorAll("a[href='#project']")[0]
    window.addEventListener('scroll', (e) => {
        let dound_about = document.getElementById('about').getBoundingClientRect().y
        let bound_exp = document.getElementById('experience').getBoundingClientRect().y
        let bound_proj = document.getElementById('project').getBoundingClientRect().y

        let ab = document.getElementById('about').clientHeight
        let ex = document.getElementById('experience').clientHeight
        let pr = document.getElementById('project').clientHeight
        if(dound_about <= 20 && dound_about >= Number(`-${ab-20}`)) {
            about.classList.add('active');
            exp.classList.remove('active');
            proj.classList.remove('active');
        } else if(bound_exp <= 20 && bound_exp >= Number(`-${ex-20}`)) {
            about.classList.remove('active');
            exp.classList.add('active');
            proj.classList.remove('active');
        } else if(bound_proj <= 20 && bound_proj >= Number(`-${pr-20}`)) {
            about.classList.remove('active');
            exp.classList.remove('active');
            proj.classList.add('active');
        }
    })
})
</script>
<template>
    <main class="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p class="mb-4" v-for="text in aboutme.aboutme_paragraphs">
                {{ text }}
            </p>
        </section>

        <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol class="group/list">
                    <li v-for="exp in exp" class="mb-12">
                        <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" :aria-label="exp.time">
                                {{ exp.time }}
                            </header>
                            <div class="z-10 sm:col-span-6">
                                <h3 class="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" :href="exp.link" target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{{ exp.post }} · <span class="inline-block">{{ exp.company }}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span>
                                        </a>
                                    </div>
                                </h3>
                                <p class="mt-2 text-sm leading-normal">
                                    {{ exp.desc }}
                                </p>
                                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li v-for="stack in exp.stack" class="mr-1.5 mt-2">
                                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ stack }}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
                <div class="mt-12">
                    <a v-if="aboutme.resume_link" style="cursor: pointer;" target='about_blank' :href="aboutme.resume_link" class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 text-base">
                        Full Resume
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>

        <section id="project" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <ul class="group/list">
                <li v-for="project in proj" class="mb-12">
                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                        </div>
                        <div class="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" :href="project.link" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">

                                    </span>
                                    <span>
                                        {{ project.name }} 
                                        <span class="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                        </span>
                                    </span>
                                </a>
                            </h3>
                            <p class="mt-2 text-sm leading-normal">
                                {{ project.desc }}
                            </p>
                            <ul v-if="project.stack" class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                <li v-for="stack in project.stack" class="mr-1.5 mt-2">
                                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ stack }}</div>
                                </li>
                            </ul>
                        </div>
                        <img v-if="project.src" :alt="project.alt" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" :src="'/'+project.src">
                        <div class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" v-else ></div>
                    </div>
                </li>
            </ul>
            <div class="mt-12">
                <a style="cursor: pointer;" href="/projects" class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 text-base">
                    See all projects
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </section>
    </main>
</template>
