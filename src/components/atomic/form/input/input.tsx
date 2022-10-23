import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Input = (props: InputProps) => {
  const { onChange, ...otherProps } = props

  return (
    <input
      type={otherProps.type || 'text'}
      className={`border-2 border-light-100 px-7 py-3 font-sans placeholder:text-grey-300 rounded-full color-light outline-none focus:border-primary-default transition ${otherProps.className}`}
      placeholder={otherProps.placeholder}
      onChange={onChange}
    />
  )
}
