import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  backgroundColor: vars.color.light,
  color: vars.color.dark,
  padding: '2rem',
});

export const title = style({
  fontWeight: 'bold',
  fontSize: '1.25rem',
});
