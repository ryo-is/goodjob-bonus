import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  backgroundColor: '#333333',
  color: vars.color.light,
  padding: '0 2rem',
});

export const title = style({
  fontWeight: 'bold',
  fontSize: '1.25rem',
  lineHeight: '64px',
});

export const menuItemContainer = style({
  marginTop: '36px',
});

export const menuItem = style({
  textDecoration: 'none',
  color: 'inherit',
});
