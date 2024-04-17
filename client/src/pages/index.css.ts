import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const button = style({
  backgroundColor: `${vars.color.secondary} !important`,
  color: vars.color.dark,
  padding: '8px 24px',
  border: `1px solid ${vars.color.dark}`,
  borderRadius: '6px',
  width: 'fit-content',
  fontSize: '1rem',
  cursor: 'pointer',

  ':active': {
    backgroundColor: `${vars.color.primary} !important`,
  },
});
