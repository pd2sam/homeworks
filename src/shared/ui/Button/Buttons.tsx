import type { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'close';
    className?: string;
}

const Button = ({ onClick, children, variant = 'primary', className = '' }: ButtonProps) => {
    const baseClass = variant === 'close' ? 'modal-close' : `button button-${variant}`;
    const finalClassName = className ? `${baseClass} ${className}` : baseClass;

    return (
        <button 
            className={finalClassName}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

