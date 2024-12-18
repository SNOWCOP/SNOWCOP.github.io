import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'SNOWCOP',
  description: 'Unlocking the full potential of Copernicus data and infrastructure to improve meltwater monitoring in the Andes',

  theme: defaultTheme({
    //logo: 'https://vuejs.press/images/hero.png',
    logo: '/images/logo_snowcop_extratropical.png',
    navbar: ['/', '/about', '/Team'],
  }),

  bundler: viteBundler(),

  base: 'https://snowcop.eu/',
})
