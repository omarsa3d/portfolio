import gericht from './assets/gericht.png'
import coffee from './assets/coffee.png'
import rpg from './assets/rpg.png'
import cryptoverse from './assets/cryptoverse.png'
import apple from './assets/apple.png'

const header = {
  homepage: '#',
  title: 'OS.',
}

const about = {
  name: 'Omar Saad',
  role: 'Front-End Developer',
  description:
    'specializing in building responsive, user-friendly interfaces with React. With a background in architecture engineering, I bring a unique perspective to my work, blending design principles with technical expertise to create seamless digital experiences. I\'m passionate about pushing the boundaries and continually learning new techniques to elevate my craft.',
  resume: 'https://drive.google.com/file/d/1ZoOfCqCnArpKBL2FGIjMfqVn-4qZAKYk/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/omarsa3d/',
    github: 'https://github.com/omarsa3d',
  },
}

const projects = [
  {
    name: 'Apple iPhone',
    image: apple,
    description: 'A responsive clone of apple iPhone 15 Pro page using GSAP and Three.js with smooth animations and 3d models.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'GSAP', 'Three.js', 'R3F'],
    sourceCode: 'https://github.com/omarsa3d/apple',
    livePreview: 'https://omar-saad-iphone.netlify.app//',
  },
  {
    name: 'Cryptoverse',
    image: cryptoverse,
    description: 'Powered by real-time APIs, our website offers accurate pricing data and comprehensive market insights, alongside the latest news from the crypto world.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Ant Design', 'Redux Toolkit', 'RTK Query'],
    sourceCode: 'https://github.com/omarsa3d/cryptoverse',
    livePreview: 'https://saad-crypto.netlify.app/',
  },
  {
    name: 'Gericht Restaurant',
    image: gericht,
    description: 'Built with React and Material UI, this restaurant website offers a clean and responsive design for an engaging user experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Material UI'],
    sourceCode: 'https://github.com/omarsa3d/restaurant-react-app',
    livePreview: 'https://omarsa3d-restaurant.netlify.app/',
  },
  {
    name: 'Coffee Shop',
    image: coffee,
    description: 'A responsive coffee shop website showcasing products, built with HTML, CSS, and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/omarsa3d/coffee-website',
    livePreview: 'https://omarsa3d.github.io/coffee-website/',
  },
  {
    name: 'Role Playing Game',
    image: rpg,
    description: 'This role-playing game was developed using JavaScript to practice key programming fundamentals, from functions and event handling',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/omarsa3d/rpg-js-project01',
    livePreview: 'https://omarsa3d.github.io/rpg-js-project01/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux Toolkit',
  'Axios',
  'Material UI',
  'Ant Design',
  'GSAP',
  'Three.js',
  'R3F',
  'Git'
]

const contact = {
  email: 'omarsa3d74@gmail.com',
}

export { header, about, projects, skills, contact }
