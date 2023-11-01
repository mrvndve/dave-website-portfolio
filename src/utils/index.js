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