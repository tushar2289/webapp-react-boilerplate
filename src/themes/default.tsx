import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8906',
    },
    secondary: {
      main: '#f25f4c',
    },
    error: {
      main: '#e53170',
    },
    background: {
      default: '#0f0e17',
      paper: '#a7a9be',
    },
    text: {
      primary: '#fffffe',
    },
  },
});

export default defaultTheme;
