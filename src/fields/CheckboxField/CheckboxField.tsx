import './styles.scss'

import {
  Dispatch,
  FC,
  FormEventHandler,
  HTMLAttributes,
  SetStateAction,
} from 'react'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'

interface Props extends HTMLAttributes<HTMLInputElement> {
  model?: string | number
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  label?: string
  errorMessage?: string
  disabled?: string | boolean
  readonly?: string | boolean
  tabindex?: number
}

const CheckboxField: FC<Props> = ({
  model,
  value,
  setValue,
  label,
  errorMessage,
  disabled,
  readonly,
  tabindex,
  className = '',
  ...rest
}) => {
  const isDisabled = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const isReadonly = ['', 'readonly', true].includes(
    readonly as string | boolean,
  )

  const checkboxClasses = [
    'checkbox-field',
    ...(className ? [className] : []),
    ...[
      ...(isDisabled ? ['disabled'] : []),
      ...(isReadonly ? ['readonly'] : []),
      ...(errorMessage ? ['error'] : []),
      ...(value ? ['checked'] : []),
    ].map(el => `checkbox-field--${el}`),
  ].join(' ')

  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement

    setValue(target.checked)
  }

  return (
    <label className={checkboxClasses}>
      <input
        className='checkbox-field__input'
        type='checkbox'
        checked={value}
        value={model}
        disabled={!!disabled}
        tabIndex={isDisabled || isReadonly ? -1 : tabindex}
        onChange={onChange as unknown as FormEventHandler<HTMLInputElement>}
        {...rest}
      />
      <span className='checkbox-field__frame-wrp' aria-hidden='true'>
        <span
          className={`checkbox-field__frame ${
            value ? 'checkbox-field__frame--checked' : ''
          }`}
        >
          {value ? (
            <Icon
              name={ICON_NAMES.check}
              className='checkbox-field__frame-icon'
            />
          ) : (
            <></>
          )}
        </span>
      </span>

      <span className='checkbox-field__label'>{label}</span>
    </label>
  )
}

export default CheckboxField
