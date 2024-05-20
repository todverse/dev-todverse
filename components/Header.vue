<script setup>
import aboutme from '~/data/aboutme.json'
const change_active = (e) => {
    let about = document.querySelectorAll("a[href='#about']")[0]
    let exp = document.querySelectorAll("a[href='#experience']")[0]
    let proj = document.querySelectorAll("a[href='#project']")[0]
    let hre = e.target.getAttribute('href')
    if(!hre) hre = ''
    let inner = e.target.innerHTML.toLowerCase()
    if(inner.includes('about') || hre.includes('about')) {
        about.classList.add('active');
        exp.classList.remove('active');
        proj.classList.remove('active');
    } else if(inner.includes('experience') || hre.includes('experience')) {
        about.classList.remove('active');
        exp.classList.add('active');
        proj.classList.remove('active');
    } else if(inner.includes('project') || hre.includes('project')) {
        about.classList.remove('active');
        exp.classList.remove('active');
        proj.classList.add('active');
    }
}
const move = (event) => {
    const card = event.target;

    const relX = (event.offsetX + 1) / card.offsetWidth;
    const relY = (event.offsetY + 1) / card.offsetHeight;
    const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
    const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
    card.style.transform = `perspective(500px) ${rotY} ${rotX}`;
}
const leave = (event) => {
    const card = event.target;
    card.style.transform = `perspective(500px)`;
}
</script>
<template>
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
            <h1 class="typing text-5xl font-bold">{{ aboutme.name }}</h1>
            <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{{ aboutme.post }}</h2>
            <p class="mt-4 max-w-xs leading-normal">{{ aboutme.credo }}</p>
            <nav class="nav hidden lg:block">
                <ul class="mt-16 w-max">
                    <li>
                        <a class="group flex items-center py-3 active" href="#about" @click="change_active">
                            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">ABOUT</span>
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center py-3" href="#experience" @click="change_active">
                            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center py-3" href="#project" @click="change_active">
                            <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">PROJECTS</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center">
            <li v-for="social in aboutme.social" class="mr-5 text-xs shrink-0">
                <a :href="social.link" class="block hover:text-slate-200">
                    <span class="sr-only">{{ social.name }}</span>
                    <img class="h-6 w-6" :src="`/${social.svg}`">
                </a>
            </li>
        </ul>
    </header>
</template>

<style scoped>
.active .nav-indicator {
    width: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgb(226 232 240/var(--tw-bg-opacity));
}
.active .nav-text {
    --tw-text-opacity: 1;
    color: rgb(226 232 240/var(--tw-text-opacity));
}
</style>