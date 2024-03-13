import { ComplexStyleRule, style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

const tableRow: ComplexStyleRule = {
  display: 'grid',
  gridTemplateColumns: '1fr 240px 240px',
  gap: '12px',
  padding: '0 12px',
};

export const tableHeader = style({
  ...tableRow,

  borderBottom: `2px solid ${vars.color.dark}`,
  paddingBottom: '12px',
});

export const tableBody = style({
  ...tableRow,

  borderBottom: `1px solid ${vars.color.gray}`,
  padding: '18px 12px',
});
