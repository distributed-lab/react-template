import './styles.scss'

import {
  Dispatch,
  FormEvent,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Collapse, Icon } from '@/common'
import { ICON_NAMES } from '@/enums'
import { BN } from '@/utils/math.util'

enum INPUT_TYPES {
  text = 'text',
  password = 'password',
  number = 'number',
}

interface Props<V extends string | number>
  extends HTMLAttributes<HTMLInputElement> {
  value: V
  setValue?: Dispatch<SetStateAction<V>>
  type?: string
  label?: string
  labelNodeRight?: ReactNode
  placeholder?: string
  errorMessage?: string
  min?: number
  max?: number
  disabled?: string | boolean
  readonly?: string | boolean
  tabindex?: number
  nodeLeft?: ReactNode
  nodeRight?: ReactNode
}

function InputField<V extends string | number>({
  value,
  setValue,
  type = INPUT_TYPES.text,
  label,
  labelNodeRight,
  placeholder = ' ',
  errorMessage,
  min,
  max,
  disabled,
  readonly,
  tabindex,
  nodeLeft,
  nodeRight,
  onInput,
  onChange,
  className = '',
  ...rest
}: Props<V>) {
  const uid = uuidv4()

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const isNumberType = type === INPUT_TYPES.number
  const isPasswordType = type === INPUT_TYPES.password

  const isDisabled = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const isReadonly = ['', 'readonly', true].includes(
    readonly as string | boolean,
  )

  const inputClasses = [
    'input-field',
    ...(className ? [className] : []),
    ...[
      ...(nodeLeft ? ['node-left'] : []),
      ...(nodeRight || isPasswordType ? ['node-right'] : []),
      ...(isDisabled ? ['disabled'] : []),
      ...(isReadonly ? ['readonly'] : []),
      ...(errorMessage ? ['error'] : []),
    ].map(el => `input-field--${el}`),
  ].join(' ')

  const normalizeRange = useCallback(
    (value: string | number): string => {
      let result = value

      if (min && new BN(value).compare(min) < 0) {
        result = min
      }
      if (max && new BN(value).compare(max) > 0) {
        result = max
      }

      return result as string
    },
    [max, min],
  )

  const handleInput = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const eventTarget = event.target as HTMLInputElement
      if (isNumberType) {
        eventTarget.value = normalizeRange(eventTarget.value)
      }
      if (value === eventTarget.value) return

      if (setValue) {
        setValue(eventTarget.value as V)
      }

      if (onInput) {
        onInput(event)
      }
    },
    [isNumberType, normalizeRange, onInput, setValue, value],
  )

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }
    },
    [onChange],
  )

  return (
    <div className={inputClasses}>
      {label ? (
        <label
          htmlFor={`input-field__input-${uid}`}
          className='input-field__label'
        >
          {label}
          {labelNodeRight ? labelNodeRight : <></>}
        </label>
      ) : (
        <></>
      )}
      <div className='input-field__input-wrp'>
        <input
          id={`input-field__input-${uid}`}
          className='input-field__input'
          value={value}
          onInput={e => handleInput(e)}
          onChange={handleChange}
          onWheel={event => {
            event.currentTarget.blur()
          }}
          placeholder={placeholder}
          tabIndex={isDisabled || isReadonly ? -1 : tabindex}
          type={isPasswordType && isPasswordShown ? 'text' : type}
          min={min}
          max={max}
          disabled={isDisabled || isReadonly}
          {...rest}
        />
        {nodeLeft ? (
          <div className='input-field__node-left-wrp'>{nodeLeft}</div>
        ) : (
          <></>
        )}
        {nodeRight || isPasswordType ? (
          <div className='input-field__node-right-wrp'>
            {isPasswordType ? (
              <button
                type='button'
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              >
                <Icon
                  className='input-field__password-icon'
                  name={isPasswordShown ? ICON_NAMES.eye : ICON_NAMES.eyeOff}
                />
              </button>
            ) : (
              nodeRight
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Collapse isOpen={!!errorMessage} duration={0.25}>
        <span className='input-field__err-msg'>{errorMessage}</span>
      </Collapse>
    </div>
  )
}

export default InputField
