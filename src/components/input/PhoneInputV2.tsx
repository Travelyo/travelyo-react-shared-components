import React from 'react'
import IntlTelInput from 'intl-tel-input/react'

type Props = {
  initialCountry?: string
}

const PhoneInputV2 = ({
  initialCountry = "de",
}: Props) => {
  return (
    <div className="voyage-phone-input">
      <IntlTelInput
        initOptions={{
          initialCountry,
          separateDialCode: true,
          countrySearch: false,
          fixDropdownWidth: false,
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
