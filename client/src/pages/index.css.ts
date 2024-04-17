import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const button = style({
  backgroundColor: `${vars.color.secondary} !important`,
  color: vars.color.dark,
  padding: '6px 24px',
  borderRadius: '6px',
  width: 'fit-content',
  fontSize: '1rem',
  cursor: 'pointer',

  ':active': {
    backgroundColor: `${vars.color.primary} !important`,
  },
});
