import nextjsImg from '@/assets/img/nextjs.svg'
import typescriptImg from '@/assets/img/Typescript.svg'
import elixirImg from '@/assets/img/elixir.svg'
import mongodbImg from '@/assets/img/mongodb.svg'
import scylladbImg from '@/assets/img/scylladb.svg'

interface Icon {
  type: 'font-awesome' | 'img'
  icon?: [string, string]
  src?: string
  color?: string
}

export interface Item {
  icon: Icon
  heading: string
  content: string
}

const items: Item[] = [
  {
    icon: {
      type: 'font-awesome',
      icon: ['fab', 'vuejs'],
      color: '#3bae7c'
    },
    heading: 'Vue.js',
    content: `While this site is my first project in Vue, I already seem to have a great understanding as
    I've used other JavaScript web frameworks before. I have liked using Vue so far.`
  },
  {
    icon: {
      type: 'img',
      src: nextjsImg
    },
    heading: 'Next.js',
    content: `Next.js is my most used web framework and I'm currently using it in my biggest project, <a href="https://strafe.chat" target="_blank" rel="noopener">Strafe Chat</a>.`
  },
  {
    icon: {
      type: 'font-awesome',
      icon: ['fab', 'node-js'],
      color: '#8cc84b'
    },
    heading: 'Node.js',
    content: `Node.js is the environment I use for Javascript and Typescript, I've used it quite a lot. 🙂`
  },
  {
    icon: {
      type: 'img',
      src: typescriptImg
    },
    heading: 'TypeScript',
    content: `I'm currently using TypeScript for this website and with other frameworks. I like to use it when I'm making a little bit bigger of a project and Javascript for smaller stuff.`
  },
  {
    icon: {
      type: 'font-awesome',
      icon: ['fab', 'square-js'],
      color: '#f0db4f'
    },
    heading: 'JavaScript',
    content: `JavaScript was my first ever programming language. I started by making a Discord bot with
    <a href="https://npmjs.com/package/discord.js" target="_blank" rel="noopener">discord.js</a>.`
  },
  {
    icon: {
      type: 'font-awesome',
      icon: ['fab', 'rust'],
      color: 'black'
    },
    heading: 'Rust',
    content: `I'm currently learning Rust and hope to switch to it when making webservers instead of Express.`
  },
  {
    icon: {
      type: 'img',
      src: elixirImg
    },
    heading: 'Elixir',
    content: `Although I haven't really used Elixir that much, I've used Phoneix and made a webserver with it.`
  },
  {
    icon: {
      type: 'img',
      src: mongodbImg
    },
    heading: 'MongoDB',
    content: `MongoDB was my first database to use and I think the go-to for most projects depending on
    performance.`
  },
  {
    icon: {
      type: 'img',
      src: scylladbImg
    },
    heading: 'ScyllaDB',
    content: `ScyllaDB is what I'm currently using for my chat platform
    <a href="https://strafe.chat" target="_blank" rel="noopener">Strafe Chat</a>. It's a great
    database to use if you need ultra-fast inserting and selecting.`
  }
]

export default items
