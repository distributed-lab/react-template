import './styles.scss'

import { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums/icon-names.enum'

enum SCHEMES {
  primary = 'primary',
  flat = 'flat',
}

enum MODIFICATIONS {
  borderCircle = 'border-circle',
  borderRounded = 'border-rounded',
  iconFirst = 'icon-first',
  big = 'big',
  small = 'small',
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

type Props<R extends string, H extends string> = {
  iconName?: ICON_NAMES
  text?: string
  schemes?: string
  modifications?: string
  href?: H
  routePath?: R
  disabled?: boolean
} & (R extends string
  ? Omit<LinkProps, 'to'>
  : H extends string
  ? AnchorHTMLAttributes<HTMLAnchorElement>
  : HTMLAttributes<HTMLButtonElement>)

const AppButton = <R extends string, H extends string>({
  iconName,
  text,
  schemes = `${SCHEMES.primary}`,
  modifications = `${MODIFICATIONS.borderRounded}`,
  href,
  routePath,
  disabled,
  children,
  className,
  ...rest
}: Props<R, H>) => {
  const isDisabled: boolean = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const btnSchemes = schemes
    ?.split(' ')
    .filter((el: string) => Boolean(el))
    .map((el: string) => `app-button--${el}`)

  const btnModifications = modifications
    ?.split(' ')
    .filter((el: string) => Boolean(el))
    .map((el: string) => `app-button--${el}`)

  const btnStates = [...(isDisabled ? ['app-button--disabled'] : [])]

  const buttonClasses = ['app-button', className]
    .concat(btnSchemes)
    .concat(btnModifications)
    .concat(btnStates)
    .join(' ')

  if (routePath) {
    return (
      <NavLink
        className={buttonClasses}
        to={routePath}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
      >
        {children || <span className='app-button__text'>{text}</span>}
        {iconName ? (
          <Icon className='app-button__icon' name={iconName} />
        ) : (
          <></>
        )}
      </NavLink>
    )
  } else if (href) {
    return (
      <a
        className={buttonClasses}
        href={href}
        {...(rest as HTMLAttributes<HTMLAnchorElement>)}
      >
        {children || <span className='app-button__text'>{text}</span>}
        {iconName ? (
          <Icon className='app-button__icon' name={iconName} />
        ) : (
          <></>
        )}
      </a>
    )
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      {...(rest as HTMLAttributes<HTMLButtonElement>)}
    >
      {children || <span className='app-button__text'>{text}</span>}
      {iconName ? <Icon className='app-button__icon' name={iconName} /> : <></>}
    </button>
  )
}

export default AppButton
