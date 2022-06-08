import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#f9fafb',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#4afefd',
      secondary: '#f9fafb',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
