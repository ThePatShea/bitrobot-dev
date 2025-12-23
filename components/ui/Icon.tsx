/**
 * @fileoverview Icon component for rendering SVG icons from the public/icons directory
 * @module components/ui/Icon
 */

import React from 'react';
import Image from 'next/image';

/**
 * Props for the Icon component
 * @interface IconProps
 */
interface IconProps {
  /** Name of the icon file (without .svg extension) */
  name: string;
  /** Size of the icon in pixels */
  size?: number;
  /** Optional additional CSS classes */
  className?: string;
  /** Alt text for accessibility */
  alt?: string;
}

/**
 * Icon component for rendering SVG icons from the public/icons directory
 * Uses Next.js Image component for optimized loading
 *
 * @param {IconProps} props - Component props
 * @param {string} props.name - Name of the icon file (without .svg extension)
 * @param {number} [props.size=20] - Size of the icon in pixels
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.alt=''] - Alt text for accessibility
 * @returns {JSX.Element} An optimized image element displaying the icon
 *
 * @example
 * ```tsx
 * <Icon name="dashboard" size={20} />
 * <Icon name="profile" size={24} className="opacity-50" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', alt = '' }) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
    />
  );
};
