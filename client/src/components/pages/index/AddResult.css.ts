import { ComplexStyleRule, style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  marginBottom: '32px',
  border: '2px solid #333333',
  borderRadius: '8px',
});

export const summary = style({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#333333',
  color: vars.color.light,
  cursor: 'pointer',
});

export const contents = style({
  padding: '16px',
});

export const inputArea = style({
  display: 'grid',
  gridTemplateRows: 'repeat(2, auto)',
  gridAutoFlow: 'column',
  gridGap: '16px',
});

export const inputRow = style({
  display: 'grid',
  gridTemplateColumns: '120px 280px',
  alignItems: 'center',
});

export const select = style({
  border: `1px solid ${vars.color.grayDark}`,
  borderRadius: '4px',
  padding: '8px 12px',
  fontSize: '0.875ren',
});

export const input = style({
  borderBottom: `1px solid ${vars.color.grayDark}`,
  padding: '6px',
});

export const actionArea = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '6px',
  marginTop: '16px',
});

const buttonBase: ComplexStyleRule = {
  backgroundColor: vars.color.buttonBgColor,
  color: vars.color.light,
  padding: '16px 32px',
  borderRadius: '8px',

  ':active': {
    backgroundColor: vars.color.buttonBgColorActive,
  },
};

export const createButton = style({
  ...buttonBase,
});

export const cancelButton = style({
  ...buttonBase,

  backgroundColor: vars.color.gray,

  ':active': {
    backgroundColor: vars.color.grayDark,
  },
});
