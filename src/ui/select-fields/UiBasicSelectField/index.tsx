import './styles.scss'

import { HTMLAttributes, useMemo } from 'react'

import { IconNames } from '@/enums'
import { UiIcon, UiSelect } from '@/ui'

type ValueOption = {
  title: string
  value: string | number
  iconName: IconNames
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  scheme?: 'primary'
  valueOptions: ValueOption[]
  value: string | number
  updateValue: (value: string | number) => void
  label?: string
  placeholder?: string
  errorMessage?: string
  note?: string
  isDisabled?: string | boolean
  isReadonly?: string | boolean
  tabindex?: number
}

export default function UiBasicSelectField({
  scheme = 'primary',
  valueOptions,
  value,
  updateValue,
  label,
  errorMessage,
  note,
  isDisabled,
  isReadonly,
  tabindex,
  className = '',
  placeholder = ' ',
}: Props) {
  const selectedOption = useMemo(() => {
    return valueOptions?.find(el => el.value === value)
  }, [value, valueOptions])

  return (
    <UiSelect
      className={className}
      scheme={scheme}
      valueOptions={valueOptions.map(el => el.value)}
      value={value}
      updateValue={updateValue}
      label={label}
      errorMessage={errorMessage}
      note={note}
      isDisabled={isDisabled}
      isReadonly={isReadonly}
      tabindex={tabindex}
      placeholder={placeholder}
      headerNode={
        selectedOption ? (
          <div className='ui-basic-select__header'>
            <UiIcon
              className='ui-basic-select__header-icon'
              name={selectedOption.iconName}
            />
            <span className='ui-basic-select__header-title'>
              {selectedOption.title}
            </span>
          </div>
        ) : undefined
      }
    >
      {valueOptions.map((option, idx) => (
        <button
          className={[
            'ui-basic-select__option',
            ...(option.value === value
              ? ['ui-basic-select__option--active']
              : []),
          ].join(' ')}
          key={idx}
          onClick={() => updateValue(option.value)}
        >
          <UiIcon
            className='ui-basic-select__option-icon'
            name={option.iconName}
          />
          <span className='ui-basic-select__option-title'>{option.title}</span>
        </button>
      ))}
    </UiSelect>
  )
}
