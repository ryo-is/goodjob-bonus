import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    dark: '#fafafa',
    light: '#2a303c',
    primary: '#d4d4d8',
    secondary: '#f4f4f5',
  },
});
