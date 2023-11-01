export const SCREENS = {
  desktop: '(min-width: 1200px)',
  laptop: '(min-width: 992px) and (max-width: 1440px)',
  tablet: '(min-width: 768px) and (max-width: 991px)',
  mobile: '(max-width: 767px)'
};

const WHITE = 'white';
const WHITESMOKE = 'whitesmoke';
const BLACK = 'black';
const LIGHTGREY = '#55527C';
const RED = '#E9322E';

export const PALLETES = {
  light: {
    button: {
      primary: {
        bg: BLACK,
        txt: WHITE
      },
      secondary: {
        bg: RED,
        txt: WHITE
      }
    },
    primary: BLACK,
    secondary: RED,
    tertiary: LIGHTGREY
  },
  dark: {
    button: {
      primary: {
        bg: WHITE,
        txt: BLACK
      },
      secondary: {
        bg: RED,
        txt: WHITE
      }
    },
    primary: WHITE,
    secondary: RED,
    tertiary: WHITESMOKE
  }
};

export const EMAIL = 'marvindavegajultos@gmail.com';

export const SERVICES = [
  {
    title: 'Web Design',
    subTitle: 'I understand that your website is an extension of your brand. my works closely with you to create a unique and visually stunning website that reflects your identity and goals.'
  },
  {
    title: 'Cross-Platform Website',
    subTitle: 'Discover my expertise in creating cross-platform websites that shine on desktops, laptops, tablets, and smartphones. With responsive design, mobile compatibility, and user-centric focus, I build unified web experiences for a diverse digital audience.'
  },
  {
    title: 'E-Commerce Website',
    subTitle: 'Explore my proficiency in designing and developing e-commerce websites. With a focus on user-friendly interfaces, secure payment gateways, and an eye for converting visitors into customers, I create online shopping experiences that drive success.'
  },
  {
    title: 'API Development',
    subTitle: 'Crafting custom APIs to seamlessly connect and empower your digital ecosystem. Experience in data integration, security, and scalability. Let\'s collaborate on your API-driven solutions for enhanced performance and functionality.'
  },
  {
    title: 'Basic Security',
    subTitle: 'In the ever-evolving digital landscape, security is paramount. Explore my proficiency in fundamental security measures to protect your online assets. From secure configurations to basic encryption, I\'m here to bolster your digital defenses.'
  },
  {
    title: 'Hosting and Server Management',
    subTitle: 'I specialize in hosting and server management to ensure your digital presence runs seamlessly. With expertise in server setup, maintenance, security, and performance optimization, I provide the robust infrastructure your online ventures require.'
  },
  {
    title: 'Database Management',
    subTitle: 'Delve into my database management expertise, where I organize and optimize data for enhanced performance and accessibility. From database design to maintenance and security, I\'m here to help you harness the power of your information.'
  }
];