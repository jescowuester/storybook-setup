// import breakpoints from './media';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    red: '#d72b47',
    redTransparent: 'rgba(215, 43, 71,0.1)',
    grey: '#838997',
    greyLight: '#f1f1f1',
    greyLighter: '#f7f7f7',
    greyBackground: '#f5f6fa'
  },
  font: {
    sizes: {
      small: {
        h1: '38px',
        h2: '14px',
        h3: '36px',
        h4: '24px',
        p: '18px'
      },
      large: {
        h1: '56px',
        h2: '14px',
        h3: '46px',
        h4: '36px',
        p: '20px'
      }
    },
    family: {
      primary: 'Roboto, sans-serif',
      system:
        "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif"
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
  gradients: {
    red: 'linear-gradient(-180deg, #570013 0%, #35000c 100%)'
  },
  breakpoints: ['900px', '1100px', '1400px']
};

export default theme;
