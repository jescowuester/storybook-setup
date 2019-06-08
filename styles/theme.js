// import breakpoints from './media';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    redLight: '#ff4967',
    red: '#d72b47',
    redDark: '#c4112e',
    redDarker: '#a2152b',
    redTransparent: 'rgba(215, 43, 71,0.1)',
    grey: '#838997',
    greyLight: '#f1f1f1',
    greyLighter: '#f7f7f7',
    greyBackground: '#f5f6fa',
    greyText: '#66798d'
  },
  font: {
    sizes: {
      mobile: {
        h1: '38px',
        h2: '14px',
        h3: '36px',
        h4: '24px',
        p: '18px'
      },
      desktop: {
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
      default: 600,
      h1: 700,
      h2: 700
    }
  },
  env: {
    borderRadius: '6px'
  },
  layout: {
    sideMargin: {
      desktop: {
        sm: '110px',
        md: '212px',
        lg: '316px'
      },
      mobile: {
        sm: '16px',
        md: '16px',
        lg: '16px'
      }
    }
  },
  shadows: {
    z1: 'box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);'
  },
  gradients: {
    nav: 'linear-gradient(-180deg, #570013 0%, #35000c 100%)'
  },
  breakpoints: {
    sm: '750px',
    md: '900px',
    lg: '1170px',
    xl: '1400px'
  },
  maxWidths: {
    default: '1600px'
  }
};

export default theme;
