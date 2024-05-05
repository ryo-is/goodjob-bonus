import { style, ComplexStyleRule } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modal = style({
  position: 'relative',
  backgroundColor: vars.color.light,
  width: '640px',
  zIndex: 100,
  borderRadius: '8px',
  padding: '24px 24px',
});

export const modalTitle = style({
  fontSize: '1.125rem',
});

export const inputArea = style({
  marginTop: '20px',
});

export const inputRow = style({
  display: 'grid',
  gridTemplateColumns: '120px 280px',
  alignItems: 'center',
  margin: '20px 0',
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
  marginTop: '32px',
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

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const hiddenContaier = style({
  display: 'none',
});
