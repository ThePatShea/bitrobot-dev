/**
 * @fileoverview Unit tests for formatting utility functions
 * @module lib/format.test
 */

import { formatNumber, formatWithCommas, truncateText, formatAddress } from './format';

describe('formatNumber', () => {
  it('formats billions with B suffix', () => {
    expect(formatNumber(1234567890)).toBe('1.2B');
    expect(formatNumber(5000000000)).toBe('5.0B');
  });

  it('formats millions with M suffix', () => {
    expect(formatNumber(1234567)).toBe('1.2M');
    expect(formatNumber(5000000)).toBe('5.0M');
  });

  it('formats thousands with k suffix', () => {
    expect(formatNumber(1234)).toBe('1.2k');
    expect(formatNumber(5000)).toBe('5.0k');
  });

  it('returns small numbers without suffix', () => {
    expect(formatNumber(123)).toBe('123');
    expect(formatNumber(999)).toBe('999');
  });

  it('respects custom decimal places', () => {
    expect(formatNumber(1234567, 2)).toBe('1.23M');
    expect(formatNumber(1234567, 0)).toBe('1M');
  });
});

describe('formatWithCommas', () => {
  it('adds commas to large numbers', () => {
    // Note: toLocaleString behavior may vary by locale
    expect(formatWithCommas(1234567)).toMatch(/1.*234.*567/);
  });

  it('returns small numbers unchanged', () => {
    expect(formatWithCommas(123)).toBe('123');
  });
});

describe('truncateText', () => {
  it('truncates text exceeding max length', () => {
    expect(truncateText('Hello World', 8)).toBe('Hello Wo...');
  });

  it('returns short text unchanged', () => {
    expect(truncateText('Hi', 8)).toBe('Hi');
  });

  it('returns text at exact max length unchanged', () => {
    expect(truncateText('12345678', 8)).toBe('12345678');
  });

  it('handles empty string', () => {
    expect(truncateText('', 5)).toBe('');
  });
});

describe('formatAddress', () => {
  const longAddress = '0x1234567890abcdef1234567890abcdef12345678';

  it('truncates long addresses with ellipsis', () => {
    expect(formatAddress(longAddress)).toBe('0x1234...5678');
  });

  it('uses custom start and end character counts', () => {
    expect(formatAddress(longAddress, 4, 4)).toBe('0x12...5678');
    expect(formatAddress(longAddress, 8, 6)).toBe('0x123456...345678');
  });

  it('returns short addresses unchanged', () => {
    expect(formatAddress('0x1234', 6, 4)).toBe('0x1234');
  });

  it('returns address exactly at limit unchanged', () => {
    expect(formatAddress('0x12345678', 6, 4)).toBe('0x12345678');
  });

  it('handles empty string', () => {
    expect(formatAddress('')).toBe('');
  });
});
