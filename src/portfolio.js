import gericht from './assets/gericht.png'
import coffee from './assets/coffee.png'
import rpg from './assets/rpg.png'

const header = {
  homepage: '',
  title: 'OS.',
}

const about = {
  name: 'Omar Saad',
  role: 'Front End Engineer',
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
    name: 'Gericht Restaurant',
    image: gericht,
    description: 'Built with React and Material UI, this restaurant website offers a clean and responsive design for an engaging user experience. It features an intuitive layout that highlights the menu, ambiance, and services, demonstrating a modern approach to front-end development.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Material UI'],
    sourceCode: 'https://github.com/omarsa3d/restaurant-react-app',
    livePreview: 'https://omarsa3d-restaurant.netlify.app/',
  },
  {
    name: 'Coffee Shop',
    image: coffee,
    description: 'A responsive coffee shop website showcasing products, built with HTML, CSS, and JavaScript. Designed to provide a smooth browsing experience across devices, this project demonstrates proficiency in layout, styling, and interactivity.',
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
  'Redux',
  'Axios',
  'Material UI',
  'Git'
]

const contact = {
  email: 'omarsa3d74@gmail.com',
}

export { header, about, projects, skills, contact }
