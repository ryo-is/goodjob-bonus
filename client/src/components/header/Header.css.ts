import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  color: vars.color.dark,
  height: '64px',
  padding: '0 2rem',
  borderBottom: `1px solid ${vars.color.primary}`,
  display: 'flex',
  alignItems: 'center',
});
