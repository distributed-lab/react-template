import './styles.scss'

import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from 'react'

import { IconNames } from '@/enums'
import { UiIcon } from '@/ui'

interface Props extends HTMLAttributes<HTMLInputElement> {
  name?: string
  model?: string | number
  value: boolean
  updateValue: Dispatch<SetStateAction<boolean>>
  label?: string
  isDisabled?: boolean
  isReadonly?: boolean
  tabindex?: number
}

export default function UiCheckbox({
  name,
  model,
  value,
  updateValue,
  label,
  tabindex,
  isDisabled,
  isReadonly,
  className = '',
}: Props) {
  const checkboxClasses = [
    'ui-checkbox',
    ...(className ? [className] : []),
    ...[
      ...(isDisabled ? ['ui-checkbox--disabled'] : []),
      ...(isReadonly ? ['ui-checkbox--readonly'] : []),
      ...(value ? ['ui-checkbox--checked'] : []),
    ],
  ].join(' ')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    updateValue(target.checked)
  }

  return (
    <label className={checkboxClasses}>
      <input
        className='ui-checkbox__input'
        type='checkbox'
        checked={value}
        name={name}
        value={model}
        tabIndex={isDisabled || isReadonly ? -1 : (tabindex as number)}
        disabled={isDisabled}
        onChange={onChange}
      />

      <span className='ui-checkbox__frame-wrp' aria-hidden='true'>
        <span
          className={[
            'ui-checkbox__frame',
            ...(value ? ['ui-checkbox__frame--checked'] : []),
          ].join(' ')}
        >
          {value ? (
            <UiIcon
              className='ui-checkbox__frame-icon'
              name={IconNames.Check}
            />
          ) : (
            <></>
          )}
        </span>
      </span>

      {label ? <span className='ui-checkbox__label'>{label}</span> : <></>}
    </label>
  )
}
