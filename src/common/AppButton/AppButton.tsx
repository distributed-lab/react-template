import './styles.scss'

import { AnchorHTMLAttributes, HTMLAttributes, useMemo } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'

type SCHEMES = 'filled' | 'flat' | 'default'

type MODIFICATIONS = 'border-circle' | 'border-rounded' | 'default'

type COLORS =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'default'

type SIZES = 'large' | 'medium' | 'small' | 'x-small' | 'default'

type Props<R extends string, H extends string> = {
  text?: string
  scheme?: SCHEMES
  modification?: MODIFICATIONS
  color?: COLORS
  size?: SIZES
  href?: H
  routePath?: R
  iconLeft?: ICON_NAMES
  iconRight?: ICON_NAMES
  disabled?: boolean
} & (R extends string
  ? Omit<LinkProps, 'to'>
  : H extends string
  ? AnchorHTMLAttributes<HTMLAnchorElement>
  : HTMLAttributes<HTMLButtonElement>)

const AppButton = <R extends string, H extends string>({
  text,
  scheme = 'filled',
  modification = 'border-rounded',
  color = 'primary',
  size = 'medium',
  href,
  routePath,
  iconLeft,
  iconRight,
  disabled = false,
  children,
  className = '',
  ...rest
}: Props<R, H>) => {
  const isDisabled: boolean = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const buttonClasses = useMemo(
    () =>
      [
        'app-button',
        `app-button--${scheme}`,
        `app-button--${modification}`,
        `app-button--${color}`,
        `app-button--${size}`,
        ...(disabled ? ['app-button--disabled'] : []),
        ...(className ? [className] : []),
      ].join(' '),
    [className, color, disabled, modification, scheme, size],
  )

  const buttonContent = useMemo(
    () => (
      <>
        {iconLeft ? (
          <Icon className='app-button__icon-left' name={iconLeft} />
        ) : (
          <></>
        )}
        {children || text ? (
          <span className='app-button__text'>{text}</span>
        ) : (
          <></>
        )}
        {iconRight ? (
          <Icon className='app-button__icon-right' name={iconRight} />
        ) : (
          <></>
        )}
      </>
    ),
    [children, iconLeft, iconRight, text],
  )

  if (routePath) {
    return (
      <NavLink
        className={buttonClasses}
        to={routePath}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
      >
        {buttonContent}
      </NavLink>
    )
  } else if (href) {
    return (
      <a
        className={buttonClasses}
        href={href}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      {...(rest as HTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  )
}

export default AppButton
