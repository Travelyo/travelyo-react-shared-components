import React, { useEffect, useState } from 'react'
import IntlTelInput from "intl-tel-input/reactWithUtils";

type Props = {
  initialCountry?: string,
  initialValue?: string,
  onChange: (value: string, name: string) => void,
}

const PhoneInputV2 = ({
  initialCountry = "de",
  initialValue,
  onChange,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('')

  useEffect(() => {
    onChange(number, 'phone')
  }, [number])

  return (
    <div className="voyage-phone-input">
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
    </div>
  )
}

export default PhoneInputV2
