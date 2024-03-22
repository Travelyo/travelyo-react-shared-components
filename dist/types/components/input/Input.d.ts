import React from 'react';
type InputProps = {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    label?: string;
    helpLabel?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    readOnly?: boolean;
};
declare const Input: (props: InputProps) => React.JSX.Element;
export default Input;
