import './styles.scss'

import { BN, DECIMALS } from '@distributedlab/tools'
import {
  Dispatch,
  FormEvent,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IconNames } from '@/enums'
import { UiCollapse, UiIcon } from '@/ui'

interface Props<V extends string> extends HTMLAttributes<HTMLInputElement> {
  scheme?: 'primary'
  value: V
  updateValue?: Dispatch<SetStateAction<V>>
  type?: 'text' | 'number' | 'password'
  label?: string
  labelNode?: ReactNode
  placeholder?: string
  errorMessage?: string
  note?: string
  min?: number
  max?: number
  isDisabled?: string | boolean
  isReadonly?: string | boolean
  tabindex?: number
  nodeLeft?: ReactNode
  nodeRight?: ReactNode
}

export default function UiTextField<V extends string>({
  scheme = 'primary',
  value,
  updateValue,
  type = 'text',
  label,
  labelNode,
  placeholder = ' ',
  errorMessage,
  note,
  min,
  max,
  isDisabled,
  isReadonly,
  tabindex,
  nodeLeft,
  nodeRight,
  onInput,
  onChange,
  className,
  ...rest
}: Props<V>) {
  const uid = uuidv4()

  const inputEl = useRef<HTMLInputElement>(null)
  const nodeLeftWrp = useRef<HTMLDivElement>(null)
  const nodeRightWrp = useRef<HTMLDivElement>(null)

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const isNumberType = useMemo(() => type === 'number', [type])
  const isPasswordType = useMemo(() => type === 'password', [type])

  const inputClasses = useMemo(
    () =>
      [
        ...(className ? [className] : []),
        ...(nodeLeft ? ['text-field--node-left'] : []),
        ...(nodeRight || isPasswordType || errorMessage
          ? ['text-field--node-right']
          : []),
        ...(isDisabled ? ['text-field--disabled'] : []),
        ...(isReadonly ? ['text-field--readonly'] : []),
        ...(errorMessage ? ['text-field--error'] : []),
        `text-field--${scheme}`,
      ].join(' '),
    [
      className,
      errorMessage,
      isDisabled,
      isPasswordType,
      isReadonly,
      nodeLeft,
      nodeRight,
      scheme,
    ],
  )

  const normalizeNumber = useCallback(
    (_value: string) => (isNaN(Number(_value)) ? value : _value),
    [value],
  )

  const normalizeRange = useCallback(
    (value: string | number): string => {
      let result = value

      if (
        String(min) &&
        BN.fromRaw(value, DECIMALS.WEI).lt(BN.fromRaw(min ?? 0, DECIMALS.WEI))
      ) {
        result = Number(min)
      } else if (
        String(max) &&
        BN.fromRaw(value, DECIMALS.WEI).gt(BN.fromRaw(max ?? 0, DECIMALS.WEI))
      ) {
        result = Number(max)
      }

      return result as string
    },
    [max, min],
  )

  const handleInput = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const eventTarget = event.target as HTMLInputElement

      if (isNumberType) {
        eventTarget.value = normalizeRange(normalizeNumber(eventTarget.value))
      }
      if (value === eventTarget.value) return

      if (updateValue) {
        updateValue(eventTarget.value as V)
      }

      if (onInput) {
        onInput(event)
      }
    },
    [
      isNumberType,
      normalizeNumber,
      normalizeRange,
      onInput,
      updateValue,
      value,
    ],
  )

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }
    },
    [onChange],
  )

  useEffect(() => {
    if (inputEl.current && nodeLeftWrp.current) {
      inputEl.current.style.setProperty(
        'padding-left',
        `calc(${
          nodeLeftWrp.current.offsetWidth || 0
        }px + var(--field-padding-left) * 2)`,
      )
    }

    if (nodeRight && nodeRightWrp.current && inputEl.current) {
      inputEl.current.style.setProperty(
        'padding-right',
        `calc(${
          nodeRightWrp.current.offsetWidth || 0
        }px + var(--field-padding-right) * 2)`,
      )
    }
  })

  return (
    <div className={`text-field ${inputClasses}`}>
      <div className='text-field__input-wrp'>
        {nodeLeft && (
          <div ref={nodeLeftWrp} className='text-field__node-left-wrp'>
            {nodeLeft}
          </div>
        )}

        <input
          ref={inputEl}
          className='text-field__input'
          id={`text-field--${uid}`}
          value={value}
          placeholder={!label ? placeholder : ' '}
          tabIndex={isDisabled || isReadonly ? -1 : (tabindex as number)}
          type={type}
          min={min}
          max={max}
          disabled={Boolean(isDisabled || isReadonly)}
          onInput={handleInput}
          onChange={handleChange}
          {...rest}
        />
        {labelNode ||
          (label && (
            <label className='text-field__label' htmlFor={`text-field--${uid}`}>
              {label}
            </label>
          ))}
        {nodeRight ? (
          <div className='text-field__node-right-wrp'>{nodeRight}</div>
        ) : isPasswordType || errorMessage ? (
          <div ref={nodeRightWrp} className='text-field__node-right-wrp'>
            {nodeRight ||
              (isPasswordType && (
                <button
                  type='button'
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                >
                  <UiIcon
                    className='text-field__password-icon'
                    name={isPasswordShown ? IconNames.Eye : IconNames.EyeOff}
                  />
                </button>
              )) ||
              (errorMessage && (
                <UiIcon
                  className='text-field__error-icon'
                  name={IconNames.ExclamationCircle}
                />
              ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <UiCollapse isOpen={!!errorMessage || !!note}>
        {errorMessage ? (
          <span className='text-field__err-msg'>{errorMessage}</span>
        ) : note ? (
          <span className='text-field__note-msg'>{note}</span>
        ) : (
          <></>
        )}
      </UiCollapse>
    </div>
  )
}
