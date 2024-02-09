// https://nuxt.com/docs/api/configuration/nuxt-config
import config from './config.json'
export default defineNuxtConfig({
    ssr: true,
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    site: {
        url: 'http://render.test',
        name: 'Render room',
        description: 'Создание строительных сайтов, готовые проекты домов из бруса и 3d визуалзиация на заказ.',
        defaultLocale: 'ru', // not needed if you have @nuxtjs/i18n installed
    },
    image: {
        providers: {
            myProvider: {
                name: 'myProvider', // optional value to overrider provider name
                provider: '~/providers/my-provider.ts', // Path to custom provider
                options: {
                    // ... provider options
                    baseURL: "https://716211.selcdn.ru/Render-room/"
                }
            }
        },
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
    modules: [//'nuxt-content-assets',
    '@nuxt/content', '@nuxt/image', '@nuxt/ui','@nuxtjs/seo'],
    content: {
        documentDriven: true,
        markdown: {
            anchorLinks: false,
        }
    },
    ui: {
        icons: ['bi','fa6-brands']
    },

})