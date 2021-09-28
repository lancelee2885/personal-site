import lui from '../../images/Lui.png'
import construction from '../../images/construction.svg'
import skills from '../../images/skills.svg'

export const About = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'About myself',
  description: `My name is Lance. The picture on the side is Lui. I am currently a software engineer. 
                My journey of programming started at Rithm School and during 
                that time I was obsessed with the beauty of programming, 
                especially problem solving and designing features that can be used daily.
                `,
  description2: `As a programmer, I also have a Bachelor degree in Biology and had worked in industrial for 2 years. 
                 I believed both fields are very similar in terms of critical thinking and project management. If you would like 
                 to know more about me feel free to hit any links below.`,
  buttonLabel: 'Here is my most recent resume',
  imgStart: true,
  img:  lui, 
  alt: 'lui the cat',
  dark: false,
  primary: false,
  darkText: true, 
  icons: [{name: 'fab fa-discord', link: 'https://discord.gg/5j8XsS2xZR'},
          {name: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/lancele3/'},
          {name: 'fab fa-github-square', link: 'https://github.com/lancelee2885'},
          {name: 'fas fa-envelope-square', link: 'mailto:lancelee2885@gmail.com'}],
  shadow: true,
  hasButton: true,
  }

export const homeObjTwo = {
  id: 'skills',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'These are what I have experienced',
  headLine: 'SKILLS',
  description: 'Languages -',
  description2: '',
  buttonLabel: '',
  imgStart: false,
  img:  construction, 
  alt: 'construction',
  dark: false,
  primary: false,
  darkText: true, 
  icons: [],
  hasButton: false,
}


export const Skills = {
  id: 'skills',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'These are what I have experienced',
  headLine: 'SKILLS',
  description1: 'Languages -',
  description2: 'Frameworks/Libraries -',
  description3: 'Tools - ',
  langSkills: ['Javascript', 'Python', 'SQL', 'CSS/SASS', 'HTML'],
  frameworkSkills: ['React', 'Express.js', 'jQuery', 'AJAX', 'Flask', 'Django', 'SQLAlchemy', 'Jest'],
  tools: ['Node.js', 'BootStrap', 'PostgreSQL', 'AWS S3', 'AWS Amplify', 'Git Workflow'],
  buttonLabel: '',
  imgStart: false,
  img:  skills, 
  alt: 'skills',
  dark: false,
  primary: false,
  darkText: true, 
  icons: [],
  hasButton: false,
}