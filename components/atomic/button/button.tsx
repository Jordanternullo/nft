import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Grey = 'grey',
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonStyle?: ButtonStyle
  children?: ReactNode
  link?: string
  onClick?: (e: React.MouseEvent) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = (props: ButtonProps) => {
  const {
    buttonStyle = ButtonStyle.Primary,
    children,
    link,
    onClick,
    className = '',
    type = 'button',
    ...otherProps
  } = props

  const styleChoose = {
    [ButtonStyle.Primary]:
      'bg-primary-default text-white hover:bg-primary-hover',
    [ButtonStyle.Secondary]:
      'bg-transparent text-primary-default border border-primary-default font-sans hover:bg-primary-default hover:text-white',
    [ButtonStyle.Grey]:
      'bg-grey-200 text-black hover:bg-primary-hover hover:text-white',
  }
  const defineClassName = `px-10 py-5 rounded-full font-averta text-xl ${styleChoose[buttonStyle]} ${className}`

  if (link) {
    return (
      <Link href={link} className={defineClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={defineClassName}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  )
}
