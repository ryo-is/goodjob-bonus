import { style } from '@vanilla-extract/css';

import { vars } from './vars.css';

export const container = style({
  minHeight: '100vh',
  padding: '2rem',
  backgroundColor: vars.color.base,
  color: vars.color.text,
});
