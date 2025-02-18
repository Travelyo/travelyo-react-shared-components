import React from 'react';
type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'secondary-negative' | 'naked' | 'secondary-alt' | 'link';
    size?: 'small' | 'medium' | 'large' | 'huge';
    icon?: React.ReactNode;
    className?: string;
    rounded?: boolean;
    inverted?: boolean;
    disabled?: boolean;
};
declare const Button: ({ label, onClick, variant, size, rounded, inverted, className, disabled, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
