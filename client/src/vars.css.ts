import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    dark: '#2a303c',
    light: '#fafafa',
    gray: '#6b7280',
    primary: '#d4d4d8',
    secondary: '#f4f4f5',
    buttonBgColor: '#0284c7',
  },
});
