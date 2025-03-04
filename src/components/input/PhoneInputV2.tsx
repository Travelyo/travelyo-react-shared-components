import React, { useEffect, useState } from 'react'
import IntlTelInput from "intl-tel-input/reactWithUtils";
import { cn } from '@/lib/utils';

type Props = {
  initialCountry?: string,
  initialValue?: string,
  onChange: (value: string, name: string) => void,
  error: string,
  placeholder?: string,
}

const PhoneInputV2 = ({
  initialCountry = "de",
  initialValue,
  onChange,
  error,
  placeholder = 'Phone number',
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
          countryOrder: ['DE', 'AT', 'CH', 'LU', 'CZ'],
          useFullscreenPopup: false,
        }}
        inputProps={{
          className: 'voyage-phone-input',
          placeholder,
        }}
      />
      {error && <div className="text-error-dark text-sm font-medium">{error}</div>}
    </div>
  )
}

export default PhoneInputV2
