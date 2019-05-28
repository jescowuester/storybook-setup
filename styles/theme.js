// import breakpoints from './media';

const theme = {
  colors: {
    blackDarker: '#283039',
    blackDark: '#323F4B',
    black: '#3E4C59',
    blackLight: '#52606D',
    blackLighter: '#616E7C',
    greyDarker: '#7B8794',
    greyDark: '#9AA5B1',
    grey: '#CBD2D9',
    greyLight: '#E4E7EB',
    greyLighter: '#F5F7FA',
    white: '#fff',
    redDark: '#E41408',
    red: '#F5352A',
    redLight: '#F65C53',
    redLighter: '#ff7a72',
    orangeDark: '#FC9900',
    orange: '#ED9918',
    orangeLight: '#D99E43',
    blueDark: '#067AED',
    blue: '#3A8CDD',
    blueLight: '#94BDF0'
  },
  font: {
    sizes: {
      small: {
        h1: '50px',
        h2: '14px',
        h3: '40px',
        h4: '30px',
        p: '18px'
      },
      large: {
        h1: '73px',
        h2: '14px',
        h3: '46px',
        h4: '36px',
        p: '20px'
      }
    },
    family: {
      primary: 'Roboto, sans-serif',
      system:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    weights: {
      bold: 600,
      medium: 500,
      regular: 600
    },
    heights: {
      h100: '22px',
      h200: '22px',
      h300: '30px',
      h400: '33px',
      h500: '34px',
      h600: '37px',
      h700: '47px',
      h800: '55px',
      h900: '67px'
    }
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '50%'
  },
  shadows: {
    z1: '0px 1px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.15)',
    z2: '0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.15)'
  },
  breakpoints: ['900px', '1100px', '1300px']
};

export default theme;
