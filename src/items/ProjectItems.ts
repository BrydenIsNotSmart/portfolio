import strafechatImg from '@/assets/img/strafechat.webp'
import revoltbotsImg from '@/assets/img/revoltbots.webp'
import vitallistImg from '@/assets/img/vitallist.webp'
import streamyImg from '@/assets/img/streamy.webp'
import azielImg from '@/assets/img/aziel.webp'

export interface Item {
  heading: string
  url?: string
  github?: string
  discord?: string
  icon?: string
  content: string
}

const items: Item[] = [
  {
    heading: 'Streamy.gg',
    url: 'https://streamy.gg',
    github: 'https://github.com/StreamyGG',
    discord: 'https://discord.com/invite/zUHH4VTTUh',
    icon: streamyImg,
    content: `Seamlessly manage your multi-streaming, only having to add your widgets, chatbot rules, moderation and more once! `
  },
  {
    heading: 'StrafeChat',
    url: 'https://strafe.chat',
    github: 'https://github.com/strafechat',
    discord: 'https://discord.com/invite/XPyjQXaXKG',
    icon: strafechatImg,
    content: `Strafe is a free speech and open-source full-stack chat application that I'm currently making.`
  },
  {
    heading: 'RevoltBots',
    url: 'https://revoltbots.org',
    github: 'https://github.com/brydenisnotsmart/revolt-bot-list',
    icon: revoltbotsImg,
    content: `RevoltBots is a Revolt Bot List that I made when I was on the chat platform Revolt. I've since transferred ownership and no longer maintain it.`
  },
  {
    heading: 'VitalList',
    github: 'https://github.com/vitaldevelopment/vitallist',
    icon: vitallistImg,
    content: `VitalList was a Discord Bot list I made to discover Discord bots and servers. It has since been shutdown and no longer maintained.`
  },
  {
    heading: 'Aziel',
    url: 'https://aziel.vitaldevs.org',
    github: 'https://github.com/vitaldevelopment/aziel',
    icon: azielImg,
    content: `Aziel is a Discord bot that features moderation, fun commands, counting, a web dashboard and more! It's still up although I don't really work on it much anymore.`
  }
]

export default items
