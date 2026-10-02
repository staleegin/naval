import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.BASE_URL || (repoName ? `/${repoName}/` : '/')

export default defineConfig({
  lang: 'zh-CN',
  title: 'Naval × Chris Williamson',
  description: '纳瓦尔与 Chris Williamson 对话 · 26 章',
  base,
  themeConfig: {
    nav: [{ text: '首页', link: '/' }, { text: '开始对话', link: '/chapters/01' }],
    sidebar: [{ text: '访谈章节', items: [
          { text: '01 · 成功值得追求吗？', link: '/chapters/01' },
          { text: '02 · 解除欲望的捷径', link: '/chapters/02' },
          { text: '03 · 改变观点是虚伪吗？', link: '/chapters/03' },
          { text: '04 · 如何脱离地位游戏的干扰', link: '/chapters/04' },
          { text: '05 · 提升自尊的方法', link: '/chapters/05' },
          { text: '06 · 骄傲为何代价高昂', link: '/chapters/06' },
          { text: '07 · 识别我们的幸福', link: '/chapters/07' },
          { text: '08 · 做自己的关键', link: '/chapters/08' },
          { text: '09 · 如何客观审视自己的心智', link: '/chapters/09' },
          { text: '10 · 避免内心的犬儒与悲观', link: '/chapters/10' },
          { text: '11 · 什么是幸福', link: '/chapters/11' },
          { text: '12 · 学会与焦虑共处', link: '/chapters/12' },
          { text: '13 · 优化生活品质', link: '/chapters/13' },
          { text: '14 · 为什么无法改变他人', link: '/chapters/14' },
          { text: '15 · 别把自己看得太严肃', link: '/chapters/15' },
          { text: '16 · 自我觉察带来的改变', link: '/chapters/16' },
          { text: '17 · Naval 为何来上节目', link: '/chapters/17' },
          { text: '18 · 财富最好的与最坏的用法', link: '/chapters/18' },
          { text: '19 · 哲学信念', link: '/chapters/19' },
          { text: '20 · Naval 近期的观点', link: '/chapters/20' },
          { text: '21 · 人们为什么少生孩子', link: '/chapters/21' },
          { text: '22 · 亲职过程中如何信任直觉', link: '/chapters/22' },
          { text: '23 · 文化战争的未来图景', link: '/chapters/23' },
          { text: '24 · 被媒体忽视却将被历史关注的议题', link: '/chapters/24' },
          { text: '25 · 起步落后是否是一种优势', link: '/chapters/25' },
          { text: '26 · Naval 的可预见计划', link: '/chapters/26' },
    ]}],
    outline: false,
    docFooter: { prev: '上一章', next: '下一章' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '章节',
    returnToTopLabel: '回到顶部',
  },
})
