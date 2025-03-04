import React from 'react';
type ButtonProps = {
    label: string | React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'secondary-negative' | 'naked' | 'secondary-alt' | 'link';
    size?: 'small' | 'medium' | 'large' | 'huge';
    icon?: React.ReactNode;
    className?: string;
    rounded?: boolean;
    inverted?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
};
declare const Button: ({ label, onClick, variant, size, rounded, inverted, className, disabled, isLoading, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
