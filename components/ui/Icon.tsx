/**
 * Icon component for rendering SVG icons from the public/icons directory
 */

import React from 'react';
import Image from 'next/image';

/**
 * Icon component props
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
 * Icon component for rendering SVG icons
 * 
 * @example
 * ```tsx
 * <Icon name="dashboard" size={20} />
 * <Icon name="profile" size={24} className="text-blue-500" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 20, 
  className = '',
  alt = ''
}) => {
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

