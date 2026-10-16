import thfDesktop from '../assets/work/thfcocoa-desktop.webp'
import thfMobile from '../assets/work/thfcocoa-mobile.webp'
import allDesktop from '../assets/work/allhour-desktop.webp'
import allMobile from '../assets/work/allhour-mobile.webp'
import aptDesktop from '../assets/work/appointment-desktop.webp'
import aptMobile from '../assets/work/appointment-mobile.webp'
import eduDesktop from '../assets/work/eduspline-desktop.webp'
import eduMobile from '../assets/work/eduspline-mobile.webp'
import jobDesktop from '../assets/work/jobfilter-desktop.webp'
import jobMobile from '../assets/work/jobfilter-mobile.webp'

// Everything personal lives here, so updating the site means editing one file.
export const profile = {
  name: 'Adeleke Eniitan',
  role: 'Frontend Developer',
  location: 'Ibadan, Nigeria',
  email: 'eniitanyetunde@gmail.com',
  github: 'https://github.com/eniitanadeleke',
  linkedin: 'https://www.linkedin.com/in/adeleke-eniitan-12959b335/',
  cv: `${import.meta.env.BASE_URL}Adeleke-Eniitan-CV.pdf`,
  formspree: 'https://formspree.io/f/mwvjwnva',
  now: 'Frontend Developer at Tiva Creative',
}

export const filters = [
  { id: 'all', label: 'All work' },
  { id: 'client', label: 'Client websites' },
  { id: 'product', label: 'Products & builds' },
]

export const projects = [
  {
    id: 'thf',
    group: 'client',
    name: 'THF Cocoa',
    kind: 'Client website for Temple Health & Farms',
    summary:
      'A multi-page site for a cocoa company that owns its farm, factory and packaging line. The site has to serve two very different visitors: shoppers looking at the consumer brands, and manufacturers who want bulk cocoa ingredients.',
    built: [
      'Seven routed pages (story, brands, products, infrastructure, trade & B2B, contact, legal) sharing one layout and navigation.',
      'A farm-to-product section that walks through how the cocoa is grown, processed and packaged.',
      'Separate pages for the Natkokoa and KokoaSkin brands, linked by anchor from the home page.',
      'WhatsApp enquiry buttons that open a pre-written message for each intent, so the sales team knows whether a lead is a customer, a distributor or a general question.',
    ],
    stack: ['React', 'Vite', 'React Router', 'CSS3', 'Responsive design'],
    links: [{ label: 'Visit site', href: 'https://thfcocoa.com/' }],
    url: 'thfcocoa.com',
    desktop: thfDesktop,
    mobile: thfMobile,
  },
  {
    id: 'allhours',
    group: 'client',
    name: 'All Hours',
    kind: 'Client website for a retail and pharmacy group',
    summary:
      'All Hours runs supermarkets, pharmacies, hypermarkets and mini marts that stay open longer and stay stocked. The website explains the business and sends each type of partner to the right place.',
    built: [
      'A home page that splits visitors into four paths: shop owners who want stock, franchise applicants, suppliers and funders.',
      'A store-formats section presenting six shop types under one visual standard.',
      'Eight routed pages covering the business, formats, stock supply, franchising, services, partners and contact.',
      'A day-and-night trading motif in the hero that reflects the brand’s long opening hours.',
    ],
    stack: ['React', 'Vite', 'React Router', 'CSS3', 'Responsive design'],
    links: [{ label: 'Visit site', href: 'https://allhour.vercel.app/' }],
    url: 'allhour.vercel.app',
    desktop: allDesktop,
    mobile: allMobile,
  },
  {
    id: 'appointment',
    group: 'client',
    name: 'The Appointment',
    kind: 'Website for an international prayer ministry',
    summary:
      'A single-page site for a ministry that gathers people in 12 cities for prayer and fellowship. It introduces the ministry, explains how and when members meet, and gets new people signed up.',
    built: [
      'A long-form landing page with anchored sections for about, gatherings, joining and FAQs.',
      'A weekly, monthly and quarterly gathering rhythm laid out so a first-time visitor can see how to take part.',
      'A sign-up path into the ministry’s registration form, plus phone and email contact links.',
      'Editorial typography and layered imagery that hold up from wide desktop down to small phones.',
    ],
    stack: ['React', 'Vite', 'CSS3', 'Responsive design'],
    links: [{ label: 'Visit site', href: 'https://theappointment.org/' }],
    url: 'theappointment.org',
    desktop: aptDesktop,
    mobile: aptMobile,
  },
  {
    id: 'eduspline',
    group: 'product',
    name: 'Eduspline',
    kind: 'Student performance and dropout-risk platform (team project)',
    summary:
      'A platform that helps schools spot students at risk of dropping out before it happens. I built the full frontend for the team, from the public landing page to the signed-in dashboards, connected to a live REST backend.',
    built: [
      'Sign-up, login and email verification, with role-based routing that sends admins and students to different dashboards.',
      'Admin workflows for adding students one at a time or uploading a CSV of records.',
      'Dashboards with charts, engagement metrics and dropout-risk indicators returned by the team’s prediction model.',
      'Shared state with the Context API so the signed-in user and their institution follow them across pages.',
    ],
    stack: ['React', 'React Router', 'Context API', 'REST API', 'CSS3'],
    links: [
      { label: 'Visit site', href: 'https://eduspline-frontend-p95d.onrender.com/' },
      { label: 'Watch demo', href: 'https://www.loom.com/share/af61ffef1dda432ab6d23efc32fe5251' },
    ],
    url: 'eduspline-frontend-p95d.onrender.com',
    desktop: eduDesktop,
    mobile: eduMobile,
  },
  {
    id: 'jobs',
    group: 'product',
    name: 'Job Listings',
    kind: 'Filterable job board (Frontend Mentor challenge)',
    summary:
      'A job board where clicking a role, level or language tag narrows the list instantly. Built from a Frontend Mentor design to practise matching a spec closely.',
    built: [
      'Listings fetched from a JSON file and rendered with JavaScript rather than hard-coded markup.',
      'Tag filters held in a Set, so they stack: a job only shows if it matches every selected tag.',
      'A filter bar that appears once a tag is picked, with a remove button per tag and a clear-all button.',
      'Layout that reflows from one row per job on desktop to stacked cards on mobile.',
    ],
    stack: ['JavaScript', 'HTML5', 'Tailwind CSS'],
    links: [
      { label: 'Visit site', href: 'https://eniitanadeleke.github.io/Job-filtering-page/' },
      { label: 'Source code', href: 'https://github.com/eniitanadeleke/Job-filtering-page' },
    ],
    url: 'eniitanadeleke.github.io/Job-filtering-page',
    desktop: jobDesktop,
    mobile: jobMobile,
  },
  {
    id: 'recommender',
    group: 'product',
    name: 'Recommender',
    kind: 'AI book recommender',
    summary:
      'Pick a genre, a mood and your reading level, and the app asks Google’s Gemini model for six books that fit, with a reason for each. Every result is kept so you can compare suggestions.',
    built: [
      'Three linked dropdowns where the mood options change with the chosen genre, and the mood resets when the genre changes.',
      'App state managed with useReducer, with separate loading, success and error states for each request.',
      'A small Express server that holds the API key and calls Gemini, so the key never reaches the browser.',
      'Past recommendations listed as expandable panels, newest last.',
    ],
    stack: ['React', 'useReducer', 'Express', 'Gemini API', 'Vite'],
    links: [{ label: 'Source code', href: 'https://github.com/eniitanadeleke/myrecommender' }],
    url: 'github.com/eniitanadeleke/myrecommender',
    sketch: true,
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Tailwind CSS', 'React Router', 'Context API'] },
  {
    group: 'Engineering',
    items: ['Responsive layouts', 'Reusable components', 'REST API integration', 'Authentication & role-based routing', 'State management', 'Cross-browser testing'],
  },
  { group: 'Quality', items: ['Manual & end-to-end QA', 'Test case writing', 'Bug reporting', 'Regression checks'] },
  { group: 'Tools', items: ['Git & GitHub', 'Vercel', 'Vite', 'GitHub Copilot', 'Claude'] },
]

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Tiva Creative',
    period: 'Present',
    points: [
      'Build, refactor and maintain responsive client websites in React, Next.js and Tailwind CSS, keeping components reusable and behaviour consistent across screen sizes.',
      'Turn client briefs into working pages, navigation, forms and search and filter features.',
      'Run end-to-end QA before release: write test cases, reproduce and document bugs, and verify fixes.',
      'Work across several projects at once with Git branching, and report progress and blockers in standups and async updates.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Lufemos Consults',
    period: '2021 – 2023',
    points: [
      'Built React interfaces and dynamic pages for client projects, turning requirements into responsive layouts.',
      'Collaborated through Git and GitHub for version control, code review and issue tracking.',
      'Tested and debugged across browsers and devices, with accessibility checks on the UI, before each deployment.',
    ],
  },
]

export const education = [
  {
    title: 'Certificate in Software Development (Frontend)',
    where: 'Tech4Dev, Women Techsters Fellowship',
    when: 'In progress',
  },
  { title: 'B.Sc. Sociology', where: 'University of Ilorin', when: '2015 – 2019' },
]

export const certifications = [
  { title: 'JavaScript Algorithms and Data Structures', where: 'freeCodeCamp' },
  { title: 'Responsive Web Design', where: 'freeCodeCamp' },
  { title: 'Software Development (Frontend)', where: 'Axia Africa' },
]
