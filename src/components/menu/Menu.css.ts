import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  backgroundColor: '#d4d4d8',
  color: vars.color.dark,
  padding: '2rem',
  borderRight: '1px solid #d4d4d8',
});

export const title = style({
  fontWeight: 'bold',
  fontSize: '1.25rem',
});

export const menuItemContainer = style({});

export const menuItem = style({
  textDecoration: 'none',
  color: 'inherit',
});
