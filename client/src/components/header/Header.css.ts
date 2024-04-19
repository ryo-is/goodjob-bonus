import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  color: vars.color.light,
  height: '64px',
  padding: '0 2rem',
  borderBottom: `1px solid ${vars.color.primary}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const icon = style({
  width: '36px',
  height: '36px',
  color: vars.color.dark,
  cursor: 'pointer',
});
