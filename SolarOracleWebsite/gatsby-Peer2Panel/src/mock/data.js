import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, we are',
  name: 'Peer2Panel',
  subtitle: ' ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  /*resume: 'https://www.resumemaker.online/es.php', */// if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chainlink Hackhaton',
    info: 'Our system consists of a website, an API server and a hardware device. The hardware device measures the electricity output of a solar panel; then it sends the panel secret key and the aggregated output to our API server. The API server verifies the panel secret and stores the output. The website connects to Metamask to login the user, who can prepay for electricity to a smart contract. The smart contract is connected to our API server with a Chainlink oracle, and can use Chainlink keeper to execute every month. Accordingly to the oracle, the smart contract deducts the electricity fee and sends it to our account (or of another electricity provider).',
    info2: '',
    url: 'https://vimeo.com/650959490?embedded=true&source=vimeo_logo&owner=121169183',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SBHackhaton.jpg',
    title: 'Swiss Blockchain Hackathon 2021',
    info: 'We created a marketplace in which investors can trade panel ownership as virtual assets (NFTs). Each token represents one photovoltaik installation. The investors can lend the panel to customers who need it and charge according to the electricity usage.',
    info2: '',
    url: 'https://vimeo.com/640847316',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  /*
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'Test',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  */
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/peer2panel',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/peer2panel',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JonathanLehner/SolarOracle',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
