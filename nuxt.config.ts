// https://nuxt.com/docs/api/configuration/nuxt-config
//import config from './config.json'

export default defineNuxtConfig({
    ssr: true,
    devtools: {
        enabled: true,

    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}]
        }
    },
    site: {
        url: 'http://render-room.ru',
        name: 'Render room',
        description: 'Создание строительных сайтов, готовые проекты домов из бруса и 3d визуалзиация на заказ.',
        defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
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
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/seo',
        '@nuxtjs/tailwindcss'
    ],

    content: {
        documentDriven: true,

        markdown: {
            anchorLinks: false,
        }
    },


})