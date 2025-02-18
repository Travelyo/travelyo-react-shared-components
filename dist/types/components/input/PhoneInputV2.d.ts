import React from 'react';
type Props = {
    initialCountry?: string;
    initialValue?: string;
    onChange: (value: string, name: string) => void;
};
declare const PhoneInputV2: ({ initialCountry, initialValue, onChange, }: Props) => React.JSX.Element;
export default PhoneInputV2;
