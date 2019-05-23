import breakpoints from '../src/styles/media';

const theme = {
  colors: {
    'black-darker': '#283039',
    'black-dark': '#323F4B',
    black: '#3E4C59',
    'black-light': '#52606D',
    'black-lighter': '#616E7C',
    'grey-darker': '#7B8794',
    'grey-dark': '#9AA5B1',
    grey: '#CBD2D9',
    'grey-light': '#E4E7EB',
    'grey-lighter': '#F5F7FA',
    'red-dark': '#E41408',
    red: '#F5352A',
    'red-light': '#F65C53',
    'orange-dark': '#FC9900',
    orange: '#ED9918',
    'orange-light': '#D99E43',
    'blue-dark': '#067AED',
    blue: '#3A8CDD',
    'blue-light': '#94BDF0',
    greyBackground: '#f1f2f4',
    white: '#fff',
    whiteBackground: '#f9fcfd',
    offwhiteBackground: '#fafbfb'
  },
  font: {
    sizes: {
      h100: '14px',
      h200: '16px',
      h300: '18px',
      h400: '20px',
      h500: '22px',
      h600: '24px',
      h700: '36px',
      h800: '42px',
      h900: '56px'
    },
    family: {
      primary: 'Roboto, sans-serif',
      system:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    weigths: {
      bold: 400,
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
  shadows: {
    z1:
      'px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 1px 1px 0px rgba(10, 22, 70, 0.1)',
    z2:
      '0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 3px 3px -1px rgba(10, 22, 70, 0.1)',
    z3:
      '0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 6px 6px -1px rgba(10, 22, 70, 0.1)',
    z4:
      '0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 16px 16px -1px rgba(10, 22, 70, 0.1)',
    z5:
      '0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 32px 40px -2px rgba(10, 22, 70, 0.12)'
  },
  breakpoints: {
    // use like  ${({theme})=>theme.breakpoints.max-xs}{...}
    ...breakpoints
  }
};

export default theme;
