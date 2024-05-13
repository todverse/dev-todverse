<script setup>
import aboutme from '~/data/aboutme.json'
</script>
<template>
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div class="lg:py-24">
            <a class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                Go Back
            </a>
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            <table id="content" class="mt-12 w-full border-collapse text-left">
                <thead class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    <tr>
                        <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in aboutme.projects" class="border-b border-slate-300/10 last:border-none">
                        <td class="py-4 pr-4 align-top text-sm">
                            <div class="translate-y-px">{{ project.year }}</div>
                        </td>
                        <td class="py-4 pr-4 align-top text-sm">
                            <div class="translate-y-px">
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
                            </div>
                        </td>
                        <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                            <ul v-if="project.stack" class="flex flex-wrap" aria-label="Technologies used">
                                <li v-for="stack in project.stack" class="mr-1.5 mt-1.5">
                                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{{ stack }}</div>
                                </li>
                            </ul>
                        </td>
                        <td class="hidden py-4 max-w-xs pr-12 align-top text-sm lg:table-cell">
                            <div class="translate-y-px">
                                {{ project.desc }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- <div class="flex w-full flex-wrap">
        <div class="w-1/3 p-5" style="text-align: center;" v-for="project in aboutme.projects">
            <a :href="project.link"><h3>{{ project.name }}</h3></a>
            <p>{{ project.desc }}</p>
            <img :src="project.src" width="300">
        </div>
    </div> -->
</template>