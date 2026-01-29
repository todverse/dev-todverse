import { ref, computed } from 'vue'
import aboutme from '~/data/aboutme.json'

const translations = {
    en: {
        nav: {
            about: 'ABOUT',
            experience: 'EXPERIENCE',
            projects: 'PROJECTS'
        },
        ui: {
            catResume: 'cat',
            resumeFile: 'resume.pdf',
            status: 'system_status: active',
            socket: 'Connect_Via_Socket:',
            runAll: 'RUN',
            allProjectsLink: '--all-projects',
            noPreview: 'No_Preview',
            back: 'cd ..',
            allProjectsTitle: 'All Projects',
            year: 'Year',
            project: 'Project',
            builtWith: 'Built_with',
            description: 'Description'
        },
        seo: {
            title: 'todverse',
            description: 'This is the website of the developer Maxim. I make web applications. I develop both the server part and the client part.'
        }
    },
    ru: {
        nav: {
            about: 'ОБО МНЕ',
            experience: 'ОПЫТ',
            projects: 'ПРОЕКТЫ'
        },
        ui: {
            catResume: 'cat',
            resumeFile: 'резюме.pdf',
            status: 'статус_системы: активен',
            socket: 'Связаться_через_сокет:',
            runAll: 'ЗАПУСТИТЬ',
            allProjectsLink: '--все-проекты',
            noPreview: 'Нет_превью',
            back: 'cd ..',
            allProjectsTitle: 'Все проекты',
            year: 'Год',
            project: 'Проект',
            builtWith: 'Стек',
            description: 'Описание'
        },
        seo: {
            title: 'todverse',
            description: 'Это сайт разработчика Максима. Я создаю веб-приложения. Разрабатываю как серверную, так и клиентскую часть.'
        }
    }
}

const currentLang = ref('en')

export const useLanguage = () => {
    const initLanguage = () => {
        if (process.client) {
            const saved = localStorage.getItem('lang')
            if (saved && (saved === 'en' || saved === 'ru')) {
                currentLang.value = saved
            } else {
                const browserLang = navigator.language.split('-')[0]
                currentLang.value = browserLang === 'ru' ? 'ru' : 'en'
            }
        }
    }

    const setLanguage = (lang: 'en' | 'ru') => {
        currentLang.value = lang
        if (process.client) {
            localStorage.setItem('lang', lang)
        }
    }

    const t = (path: string) => {
        const keys = path.split('.')
        let result: any = translations[currentLang.value as keyof typeof translations]
        for (const key of keys) {
            if (result[key]) {
                result = result[key]
            } else {
                return path
            }
        }
        return result
    }

    const data = computed(() => {
        return aboutme[currentLang.value as keyof typeof aboutme]
    })

    return {
        currentLang,
        initLanguage,
        setLanguage,
        t,
        data
    }
}
