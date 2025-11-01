import type { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}: ButtonProps) => (
  <button
    type={type}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    className={`button button-${variant}`}
  >
    {children}
  </button>
);

export default Button;

