import React from 'react';
type Props = {
    initialCountry?: string;
    initialValue?: string;
    onChange: (value: string, name: string) => void;
    error: string;
    placeholder?: string;
};
declare const PhoneInputV2: ({ initialCountry, initialValue, onChange, error, placeholder, }: Props) => React.JSX.Element;
export default PhoneInputV2;
