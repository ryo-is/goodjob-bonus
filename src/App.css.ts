import { style } from '@vanilla-extract/css';

import { vars } from './vars.css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: vars.color.dark,
  color: vars.color.light,
  display: 'grid',
  gridTemplateColumns: '320px 1fr',
});

export const main = style({
  padding: '2rem',
});
