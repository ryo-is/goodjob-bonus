import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  position: 'absolute',
  bottom: '32px',
  right: '32px',
  backgroundColor: vars.color.buttonBgColor,
  color: vars.color.light,
  padding: '16px 32px',
  borderRadius: '8px',

  ':active': {
    backgroundColor: vars.color.buttonBgColorActive,
  },
});
