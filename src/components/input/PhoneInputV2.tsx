import React, { useEffect, useState } from 'react'
import IntlTelInput from "intl-tel-input/reactWithUtils";
import { cn } from '@/lib/utils';

type Props = {
  initialCountry?: string,
  initialValue?: string,
  onChange: (value: string, name: string) => void,
  error: string,
}

const PhoneInputV2 = ({
  initialCountry = "de",
  initialValue,
  onChange,
  error,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('')

  useEffect(() => {
    onChange(number, 'phone')
  }, [number])

  return (
    <div className={cn('voyage-phone-input', { 'voyage-phone-input--error': error })}>
      <IntlTelInput
        onChangeNumber={setNumber}
        onChangeValidity={setIsValid}
        initialValue={initialValue}
        initOptions={{
          initialCountry,
          separateDialCode: true,
          countrySearch: false,
          fixDropdownWidth: false,
          countryOrder: ['IL', 'DE', 'AT', 'CH'],
        }}
        inputProps={{
          className: 'voyage-phone-input',
          placeholder: 'Phone number',
        }}
      />
      {error && <div className="text-error-dark text-sm font-medium">{error}</div>}
    </div>
  )
}

export default PhoneInputV2
