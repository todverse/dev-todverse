<script setup>
import { useLanguage } from '~/composables/useLanguage'
const { t, data, setLanguage, currentLang } = useLanguage()

const navItems = [
    { key: 'about', label: 'nav.about', href: '#about' },
    { key: 'experience', label: 'nav.experience', href: '#experience' },
    { key: 'projects', label: 'nav.projects', href: '#project' },
]

const change_active = (e) => {
    const hre = e.currentTarget.getAttribute('href')
    const sections = ['about', 'experience', 'project']
    
    sections.forEach(s => {
        const el = document.querySelectorAll(`a[href='#${s}']`)[0]
        if (`#${s}` === hre) {
            el?.classList.add('active')
        } else {
            el?.classList.remove('active')
        }
    })
}
</script>
<template>
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div class="relative">
            <!-- Language Switcher -->
            <div class="flex gap-4 mb-8 font-mono text-xs">
                <button 
                    @click="setLanguage('en')" 
                    :class="[currentLang === 'en' ? 'text-terminal-green underline' : 'text-slate-500 hover:text-terminal-green']"
                >
                    EN
                </button>
                <span class="text-slate-700">/</span>
                <button 
                    @click="setLanguage('ru')" 
                    :class="[currentLang === 'ru' ? 'text-terminal-green underline' : 'text-slate-500 hover:text-terminal-green']"
                >
                    RU
                </button>
            </div>

            <!-- Terminal Header Decoration -->
            <div class="hidden lg:flex items-center gap-2 mb-8 opacity-40">
                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span class="text-[10px] font-mono ml-2 tracking-tighter uppercase">{{ t('ui.status') }}</span>
            </div>

            <h1 
                class="typing text-4xl sm:text-5xl font-bold text-terminal-green glitch" 
                :data-text="data.name"
                :style="{ 
                    width: data.name.length + 'ch', 
                    animation: `typing 2.5s steps(${data.name.length}), blink .8s step-end infinite alternate` 
                }"
            >
                {{ data.name }}
            </h1>
            <h2 class="mt-4 text-lg font-medium tracking-tight text-terminal-cyan sm:text-xl underline decoration-terminal-cyan/50 underline-offset-8">{{ data.post }}</h2>
            <p class="mt-6 max-w-xs leading-relaxed text-slate-200 border-l-2 border-terminal-green/40 pl-4 py-1">{{ data.credo }}</p>
            
            <nav class="nav hidden lg:block">
                <ul class="mt-16 w-max font-mono">
                    <li v-for="item in navItems" :key="item.key" class="mb-4">
                        <a 
                            :class="['group flex items-center py-2 transition-all hover:pl-4', item.key === 'about' ? 'active' : '']" 
                            :href="item.href" 
                            @click="change_active"
                        >
                            <span class="nav-bracket mr-2 text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                            <span class="nav-text text-sm font-bold tracking-[0.2em] text-slate-500 group-hover:text-terminal-green transition-colors uppercase">
                                {{ t(item.label) }}
                            </span>
                            <span class="nav-bracket ml-2 text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">]</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div class="mt-8">
            <div class="text-[10px] font-mono text-slate-600 mb-4 uppercase tracking-widest">{{ t('ui.socket') }}</div>
            <ul class="ml-1 flex items-center">
                <li v-for="social in data.social" :key="social.name" class="mr-6 text-xs shrink-0 group">
                    <a :href="social.link" class="block relative transition-transform hover:-translate-y-1">
                        <span class="sr-only">{{ social.name }}</span>
                        <div class="absolute -inset-2 bg-terminal-green/0 group-hover:bg-terminal-green/10 rounded-lg blur-sm transition-all"></div>
                        <img class="h-6 w-6 relative grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all filter drop-shadow-[0_0_8px_rgba(0,255,65,0)] group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]" :src="`/${social.svg}`">
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.active .nav-text {
    color: #00ff41;
    text-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
}
.active .nav-bracket {
    opacity: 1;
}
.nav-text {
    transition: all 0.3s ease;
}
</style>
