import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  backgroundColor: '#52525b',
  color: vars.color.light,
  height: '72px',
  lineHeight: '72px',
  padding: '0 2rem',
});

export const title = style({
  fontWeight: 'bold',
  fontSize: '1.25rem',
});
