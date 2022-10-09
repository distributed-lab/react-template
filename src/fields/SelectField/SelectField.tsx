import './styles.scss'

import { useSelect } from 'downshift'
import { isEqual } from 'lodash-es'
import {
  cloneElement,
  Dispatch,
  HTMLAttributes,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Collapse } from '@/common'

interface Props<T> extends HTMLAttributes<HTMLSelectElement> {
  options: unknown[]
  value: T
  setValue: Dispatch<SetStateAction<T>>
  label?: string
  errorMessage?: string
  disabled?: string | boolean
  readonly?: string | boolean
  tabindex?: number
  children: ReactElement<HTMLAttributes<HTMLElement>>[]
}

function SelectField<T>({
  options,
  value,
  setValue,
  label,
  errorMessage,
  disabled,
  readonly,
  tabindex,
  className = '',
  placeholder = ' ',
  children,
  ...rest
}: Props<T>) {
  const {
    isOpen,
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    closeMenu,
    getItemProps,
    selectedItem,
  } = useSelect({
    items: options,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      setValue(selectedItem as T)
      closeMenu()
    },
  })

  const [selectedOptionContent, setSelectedOptionContent] = useState<
    ReactElement | undefined
  >()

  const toggleBtnContent = useMemo(() => {
    return selectedOptionContent || placeholder
  }, [placeholder, selectedOptionContent])

  const isDisabled = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const isReadonly = ['', 'readonly', true].includes(
    readonly as string | boolean,
  )

  const selectClasses = [
    'select-field',
    ...(className ? [className] : []),
    ...[
      ...(isDisabled ? ['disabled'] : []),
      ...(isReadonly ? ['readonly'] : []),
      ...(errorMessage ? ['error'] : []),
      ...(value ? ['has-value'] : []),
      ...(isOpen ? ['opened'] : []),
    ].map(el => `select-field--${el}`),
  ].join(' ')

  useEffect(() => {
    if (value) {
      const optionContent = children.find(el =>
        isEqual(el.props.defaultValue, value),
      )

      if (optionContent) {
        setSelectedOptionContent(state =>
          isEqual(state?.props.defaultValue, optionContent.props.defaultValue)
            ? state
            : optionContent,
        )
      }
    }
  }, [children, value])

  return (
    <div className={selectClasses}>
      {label ? (
        <label className='select-field__label' {...getLabelProps()}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <div className='select-field__select-wrp'>
        <button
          type='button'
          className='select-field__toggle-btn'
          aria-label={'toggle menu'}
          tabIndex={isDisabled || isReadonly ? -1 : tabindex}
          {...getToggleButtonProps()}
          {...rest}
        >
          {toggleBtnContent}
        </button>

        <Collapse
          isOpen={isOpen}
          className='select-field__dropdown'
          {...getMenuProps()}
        >
          {children.map((el, idx) => {
            const newProps = {
              ...el.props,
              key: idx,
              ...getItemProps({
                key: idx,
                index: idx,
                item: el,
                className: [
                  ...(el.props.className ? [el.props.className] : []),
                  'select-field__dropdown-item',
                  ...[
                    selectedItem === el
                      ? 'select-field__dropdown-item--selected'
                      : [],
                  ],
                ].join(' '),
                onClick: () => {
                  setSelectedOptionContent(el)
                },
              }),
            }

            return el ? cloneElement(el, newProps) : <></>
          })}
        </Collapse>
      </div>
      <Collapse isOpen={!!errorMessage}>
        <span className='select-field__err-msg'>{errorMessage}</span>
      </Collapse>
    </div>
  )
}

export default SelectField
