import './styles.scss'

import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string
  value: boolean
  updateValue: Dispatch<SetStateAction<boolean>>
  model?: string | number
  label?: string
  tabindex?: number
  isReadonly?: boolean
  isDisabled?: boolean
}

export default function UiSwitch({
  name,
  value,
  updateValue,
  model,
  label,
  tabindex,
  isReadonly,
  isDisabled,
}: Props) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    updateValue(target.checked)
  }

  return (
    <label
      className={[
        'ui-switch',
        ...(isDisabled || isReadonly ? ['ui-switch--disabled'] : []),
        ...(value ? ['ui-switch--checked'] : []),
      ].join(' ')}
    >
      <input
        className='ui-switch__input'
        type='checkbox'
        tabIndex={isDisabled || isReadonly ? -1 : (tabindex as number)}
        checked={value}
        name={name}
        value={model}
        disabled={isDisabled || isReadonly}
        onChange={onChange}
      />

      <span className='ui-switch__frame-wrp' aria-hidden='true'>
        <span
          className={[
            'ui-switch__frame',
            ...(value ? ['ui-switch__frame--checked'] : []),
          ].join(' ')}
        />
      </span>

      {label ? <span className='ui-switch__label'>{label}</span> : <></>}
    </label>
  )
}
