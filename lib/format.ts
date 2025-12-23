/**
 * @fileoverview Formatting utility functions for numbers, text, and addresses
 * @module lib/format
 */

/**
 * Format large numbers with k/M/B suffix for compact display
 *
 * @param {number} num - The number to format
 * @param {number} [decimals=1] - Number of decimal places to show
 * @returns {string} Formatted string with appropriate suffix
 *
 * @example
 * ```ts
 * formatNumber(1234) // "1.2k"
 * formatNumber(1234567) // "1.2M"
 * formatNumber(1234567890) // "1.2B"
 * ```
 */
export function formatNumber(num: number, decimals: number = 1): string {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(decimals)}B`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(decimals)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(decimals)}k`;
  }
  return num.toString();
}

/**
 * Format a number with thousands separators (commas)
 *
 * @param {number} num - The number to format
 * @returns {string} Formatted string with comma separators
 *
 * @example
 * ```ts
 * formatWithCommas(1234567) // "1,234,567"
 * ```
 */
export function formatWithCommas(num: number): string {
  return num.toLocaleString();
}

/**
 * Truncate text with ellipsis if it exceeds maximum length
 *
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis if needed
 *
 * @example
 * ```ts
 * truncateText("Hello World", 8) // "Hello..."
 * truncateText("Hi", 8) // "Hi"
 * ```
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Format a wallet address for display with ellipsis in the middle
 * Shows the first and last few characters for identification
 *
 * @param {string} address - The wallet address to format
 * @param {number} [startChars=6] - Number of characters to show at start
 * @param {number} [endChars=4] - Number of characters to show at end
 * @returns {string} Formatted address with ellipsis
 *
 * @example
 * ```ts
 * formatAddress("0x1234567890abcdef1234567890abcdef12345678") // "0x1234...5678"
 * formatAddress("0x1234567890abcdef", 4, 4) // "0x12...cdef"
 * ```
 */
export function formatAddress(
  address: string,
  startChars: number = 6,
  endChars: number = 4
): string {
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

