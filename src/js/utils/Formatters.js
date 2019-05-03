/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import accounting from 'accounting';

export const priceFormat = price =>
  accounting.formatMoney(price, { symbol: '£', precision: 0 });
