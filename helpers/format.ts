/**
 * Formatting utility functions
 * Shared helpers for formatting numbers, dates, and other data
 */

/**
 * Format large numbers with k/M/B suffix
 * 
 * @param num - The number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string with suffix
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
 * Format a number with thousands separators
 * 
 * @param num - The number to format
 * @returns Formatted string with commas
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
 * Truncate text with ellipsis
 * 
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 * 
 * @example
 * ```ts
 * truncateText("Hello World", 8) // "Hello..."
 * ```
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Format a wallet address for display
 * Shows first and last few characters with ellipsis in the middle
 * 
 * @param address - The wallet address
 * @param startChars - Number of characters to show at start (default: 6)
 * @param endChars - Number of characters to show at end (default: 4)
 * @returns Formatted address
 * 
 * @example
 * ```ts
 * formatAddress("0x1234567890abcdef") // "0x1234...cdef"
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

