// https://nuxt.com/docs/api/configuration/nuxt-config
//import config from './config.json'

export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true,},
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/seo',
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        '@artmizu/yandex-metrika-nuxt',
        'nuxt-gtag',
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}]
        }
    },
    sitemap: {
        strictNuxtContentPaths: true
    },

    //nuxtLink: {
    //    // default values
    //    trailingSlash: 'remove' // can be 'append' or 'remove'
    //},
    //seo: {
    //    redirectToCanonicalSiteUrl: true
    //},
    site: {
        url: 'https://render-room.ru',
        name: 'Render room',
        description: 'Создание строительных сайтов, готовые проекты домов из бруса и 3d визуалзиация на заказ.',
        defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
    },
    robots: {
        // provide simple disallow rules for all robots `user-agent: *` groups: [
        // block specific robots from specific pages
        groups: [{
            userAgent: ['Yandex'],
            allow: ['/'],
        }]
    },

    image: {
        presets: {
            cover: {
                modifiers: {
                    fit: 'contain',
                    format: 'jpg',
                    width: 400,
                    height: 400,
                },
            },
        },
    },
    css: ['@/assets/main.sass'],

    yandexMetrika: {
        id: '30114309',
    },
    gtag: {
        id: 'G-GYECZSLF5C'
    },
    content: {
        documentDriven: {
            navigation: true,
            page: true,
            surround: true,
        },

        markdown: {
            anchorLinks: false,
        }
    },
})