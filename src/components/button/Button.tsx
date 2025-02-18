import React from 'react'

type ButtonProps = {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'secondary-negative' | 'naked' | 'secondary-alt' | 'link'
  size?: 'small' | 'medium' | 'large' | 'huge',
  icon?: React.ReactNode,
  className?: string,
  rounded?: boolean,
  inverted?: boolean,
  disabled?: boolean,
}

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  rounded,
  inverted,
  className,
  disabled,
  ...props
}: ButtonProps) => {

  const getClassNames = () => {
    let classNames = ['move-btn']
    if (variant) classNames.push(`move-btn--${variant}`)
    if (size) classNames.push(`move-btn--${size}`)
    if (rounded) classNames.push('rounded')
    if (inverted) classNames.push('inverted')
    if (className) classNames.push(className)
    return classNames.join(' ')
  }

  return (
    <button {...props} className={getClassNames()} onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button
