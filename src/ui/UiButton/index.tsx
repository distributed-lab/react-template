import './styles.scss'

import { AnchorHTMLAttributes, HTMLAttributes, useMemo } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import { IconNames } from '@/enums'
import { UiIcon } from '@/ui'

export type Props<R extends string, H extends string> = {
  text?: string
  scheme?: 'filled' | 'flat' | 'none'
  modification?: 'border-circle' | 'border-rounded' | 'none'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'none'
  size?: 'large' | 'medium' | 'small' | 'x-small' | 'none'
  href?: H
  routePath?: R
  iconLeft?: IconNames
  iconRight?: IconNames
  isDisabled?: boolean
} & (R extends string
  ? Omit<LinkProps, 'to'>
  : H extends string
    ? AnchorHTMLAttributes<HTMLAnchorElement>
    : HTMLAttributes<HTMLButtonElement>)

const UiButton = <R extends string, H extends string>({
  text,
  scheme = 'filled',
  modification = 'border-rounded',
  color = 'primary',
  size = 'medium',
  href,
  routePath,
  iconLeft,
  iconRight,
  isDisabled = false,
  children,
  className = '',
  ...rest
}: Props<R, H>) => {
  const buttonClasses = useMemo(
    () =>
      [
        'ui-button',
        `ui-button--scheme-${scheme}`,
        `ui-button--${modification}`,
        `ui-button--${color}`,
        `ui-button--${size}`,
        ...(isDisabled ? ['ui-button--disabled'] : []),
        ...(className ? [className] : []),
        ...((iconLeft || iconRight) && !text && !children
          ? ['ui-button--icon-only']
          : []),
      ].join(' '),
    [
      children,
      className,
      color,
      iconLeft,
      iconRight,
      isDisabled,
      modification,
      scheme,
      size,
      text,
    ],
  )

  const buttonContent = useMemo(
    () => (
      <>
        {iconLeft && (
          <UiIcon className='ui-button__icon-left' name={iconLeft} />
        )}

        {children ||
          (text && <span className='ui-button__text'>{text}</span>) || <></>}

        {iconRight && (
          <UiIcon className='ui-button__icon-right' name={iconRight} />
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

export default UiButton
