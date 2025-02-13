import React from 'react'

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
}

const Input = (props: InputProps) => {
  const {
    placeholder,
    label,
    helpLabel,
    startIcon,
    endIcon,
    readOnly,
    ...restProps
  } = props;

  const inputClasses = ['voyage-input'];
  if (startIcon) inputClasses.push('voyage-input--padding-start');
  if (endIcon) inputClasses.push('voyage-input--padding-end');

  return (
    <div className="voyage-input__group">
      <label>
        {label || helpLabel && (
          <div className="voyage-input__label-group">
            <div className="voyage-input__label">{label}</div>
            <div className="voyage-input__help">{helpLabel}</div>
          </div>
        )}
        <div className="voyage-input__wrap">
          {startIcon && <span className="voyage-input__icon  voyage-input__icon--start">{startIcon}</span>}
          <input
            className={inputClasses.join(' ')}
            placeholder={placeholder}
            type="text"
            readOnly={readOnly}
            {...restProps}
          />
          {endIcon && <span className="voyage-input__icon voyage-input__icon--end">{endIcon}</span>}
        </div>
      </label>
    </div>
  )
}

export default Input
