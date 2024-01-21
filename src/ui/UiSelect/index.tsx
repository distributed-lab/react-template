import './styles.scss'

import { useSelect } from 'downshift'
import {
  cloneElement,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useClickAway } from 'react-use'
import { v4 as uuidv4 } from 'uuid'

import { IconNames } from '@/enums'
import { UiCollapse, UiIcon } from '@/ui'

interface Props<T> extends HTMLAttributes<HTMLSelectElement> {
  scheme?: 'primary'
  valueOptions: T[]
  value: T
  updateValue: (value: T) => void
  label?: string
  placeholder?: string
  errorMessage?: string
  note?: string
  isDisabled?: string | boolean
  isReadonly?: string | boolean
  tabindex?: number
  children?: ReactElement<HTMLAttributes<HTMLElement>>[]
  headerNode?: ReactNode
}

export default function UiSelect<T>({
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
  children,
  headerNode,
}: Props<T>) {
  const uid = uuidv4()

  const selectElement = useRef<HTMLDivElement>(null)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const {
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    closeMenu,
    getItemProps,
  } = useSelect<T>({
    items: valueOptions,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      updateValue(selectedItem as T)
      closeMenu()
    },
  })

  const isLabelActive = useMemo(
    () => isDropdownOpen || !!value,
    [isDropdownOpen, value],
  )

  const selectFieldClasses = useMemo(
    () =>
      [
        'ui-select',
        `ui-select--${scheme}`,
        ...(className ? [className] : []),
        ...(errorMessage ? ['ui-select--error'] : []),
        ...(isDropdownOpen ? ['ui-select--open'] : []),
        ...(isDisabled ? ['ui-select--disabled'] : []),
        ...(isReadonly ? ['ui-select--readonly'] : []),
        ...(isLabelActive ? ['ui-select--label-active'] : []),
      ].join(' '),
    [
      className,
      errorMessage,
      isDisabled,
      isDropdownOpen,
      isLabelActive,
      isReadonly,
      scheme,
    ],
  )

  useClickAway(selectElement, () => {
    setIsDropdownOpen(false)
  })

  const openDropdown = useCallback(() => {
    if (isDisabled || isReadonly) return

    setIsDropdownOpen(true)
  }, [isDisabled, isReadonly])

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false)
  }, [])

  const toggleDropdown = useCallback(() => {
    isDropdownOpen ? closeDropdown() : openDropdown()
  }, [closeDropdown, isDropdownOpen, openDropdown])

  const select = useCallback(
    (value: T) => {
      if (isDisabled || isReadonly) return

      updateValue(value as T)
      closeDropdown()
    },
    [closeDropdown, isDisabled, isReadonly, updateValue],
  )

  useEffect(() => {
    closeDropdown()
  }, [closeDropdown, value])

  return (
    <div className={selectFieldClasses}>
      <div ref={selectElement} className='ui-select__select-wrp'>
        <div className='ui-select__select-head-wrp'>
          <button
            type='button'
            className='ui-select__select-head'
            aria-label={'toggle menu'}
            tabIndex={isDisabled || isReadonly ? -1 : tabindex}
            {...getToggleButtonProps()}
            onClick={toggleDropdown}
          >
            <>
              {!label && !!placeholder && !value ? (
                <span className='ui-select__placeholder'>{placeholder}</span>
              ) : headerNode ? (
                headerNode
              ) : value ? (
                value
              ) : (
                <></>
              )}
              <UiIcon
                className={[
                  'ui-select__select-head-indicator',
                  ...(isDropdownOpen
                    ? ['ui-select__select-head-indicator--open']
                    : []),
                ].join(' ')}
                name={IconNames.ArrowDown}
              />
            </>
          </button>

          {label && (
            <label
              className='ui-select__label'
              {...getLabelProps()}
              htmlFor={`ui-select--${uid}`}
            >
              {label}
            </label>
          )}
        </div>

        <div className='ui-select__select-dropdown-wrp' {...getMenuProps()}>
          <UiCollapse
            isOpen={isDropdownOpen}
            className='ui-select__select-dropdown'
          >
            {children
              ? children.map((el, idx) => {
                  const newProps = {
                    ...el.props,
                    ...getItemProps({
                      key: idx,
                      index: idx,
                      item: valueOptions[idx],
                      onClick: () => {
                        select(valueOptions[idx])
                      },
                    }),
                    key: idx,
                  }

                  return el ? cloneElement(el, newProps) : <></>
                })
              : valueOptions.map((el, idx) => (
                  <button
                    type='button'
                    className={[
                      'ui-select__select-dropdown-item',
                      ...(value === el
                        ? ['ui-select__select-dropdown-item--active']
                        : []),
                    ].join(' ')}
                    aria-label={String(el)}
                    key={idx}
                    onClick={() => select(el)}
                  >
                    {String(el)}
                  </button>
                ))}
          </UiCollapse>
        </div>
      </div>

      <UiCollapse isOpen={!!errorMessage || !!note}>
        {errorMessage ? (
          <span className='ui-select__err-msg'>{errorMessage}</span>
        ) : note ? (
          <span className='ui-select__note'>{note}</span>
        ) : (
          <></>
        )}
      </UiCollapse>
    </div>
  )
}
