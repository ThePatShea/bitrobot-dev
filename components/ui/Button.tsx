/**
 * @fileoverview Button component with multiple variants and sizes
 * @module components/ui/Button
 */

import React from "react";

/**
 * Props for the Button component
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Optional icon to display before the text */
  icon?: React.ReactNode;
  /** Optional icon to display after the text */
  iconAfter?: React.ReactNode;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
}

/**
 * Reusable Button component with multiple variants and sizes
 * Provides consistent styling across the application
 *
 * @param {ButtonProps} props - Component props
 * @param {string} [props.variant='primary'] - Visual variant of the button
 * @param {string} [props.size='md'] - Size of the button
 * @param {React.ReactNode} [props.icon] - Icon to display before text
 * @param {React.ReactNode} [props.iconAfter] - Icon to display after text
 * @param {boolean} [props.fullWidth=false] - Whether button takes full width
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} A styled button element
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
    secondary:
      "bg-primary-light text-primary hover:bg-primary-light-hover active:bg-primary-light-active",
    outline:
      "border border-primary text-primary hover:bg-primary-light active:bg-primary-light-hover",
    ghost: "text-muted hover:bg-light-bg active:bg-border",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
    </button>
  );
};
