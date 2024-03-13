import { style } from '@vanilla-extract/css';

import { vars } from './vars.css';

export const container = style({
  height: 'calc(100vh - 64px)',
  backgroundColor: vars.color.light,
  color: vars.color.dark,
  display: 'grid',
  gridTemplateColumns: '320px 1fr',
});

export const main = style({
  padding: '2rem',
  overflow: 'scroll',
});
