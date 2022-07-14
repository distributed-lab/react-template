import './styles.scss'

import {
  Dispatch,
  FC,
  FormEvent,
  HTMLAttributes,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'
import { BN } from '@/utils/math.util'

enum INPUT_TYPES {
  text = 'text',
  password = 'password',
  number = 'number',
}

enum SCHEMES {
  iconLeft = 'icon-left',
}

interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string | number
  setValue: Dispatch<SetStateAction<string | number>>
  type?: string
  schemes?: SCHEMES
  label?: string
  placeholder?: string
  iconName?: ICON_NAMES
  errorMessage?: string
  min?: number
  max?: number
  disabled?: string | boolean
  readonly?: string | boolean
  tabindex?: number
}

const InputField: FC<Props> = ({
  value,
  setValue,
  type = INPUT_TYPES.text,
  schemes,
  label,
  placeholder = ' ',
  iconName,
  errorMessage,
  className,
  min,
  max,
  disabled,
  readonly,
  tabindex,
  ...rest
}) => {
  const uid = uuidv4()
  const errorMessageRef = useRef<HTMLDivElement>(null)

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
    className,
    ...[
      ...(schemes ? [schemes.split(' ')] : []),
      ...(isDisabled ? ['disabled'] : []),
      ...(isReadonly ? ['readonly'] : []),
      ...(errorMessage ? ['error'] : []),
      ...(iconName || isPasswordType ? ['iconed'] : []),
    ].map(el => `input-field--${el}`),
  ].join(' ')

  const onInput = (event: FormEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLInputElement
    if (isNumberType) {
      eventTarget.value = normalizeRange(eventTarget.value)
    }
    if (value === eventTarget.value) return

    setValue(eventTarget.value)
  }

  const normalizeRange = (value: string | number): string => {
    let result = value

    if (min && new BN(value).compare(min) < 0) {
      result = min
    }
    if (max && new BN(value).compare(max) > 0) {
      result = max
    }

    return result as string
  }

  const setHeightCSSVar = () => {
    errorMessageRef.current?.style.setProperty(
      '--field-error-msg-height',
      `${errorMessageRef.current?.scrollHeight}px`,
    )
  }

  return (
    <div className={inputClasses}>
      {label ? (
        <label
          htmlFor={`input-field__input-${uid}`}
          className='input-field__label'
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      <div className='input-field__input-wrp'>
        <input
          id={`input-field__input-${uid}`}
          className='input-field__input'
          value={value}
          onInput={e => onInput(e)}
          placeholder={placeholder}
          tabIndex={isDisabled || isReadonly ? -1 : tabindex}
          type={isPasswordType && isPasswordShown ? 'text' : type}
          min={min}
          max={max}
          disabled={isDisabled || isReadonly}
          {...rest}
        />
        {isPasswordType || iconName ? (
          <div className='input-field__icon-wrp'>
            {isPasswordType ? (
              <button
                type='button'
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              >
                <Icon
                  className='input-field__icon'
                  name={isPasswordShown ? ICON_NAMES.eye : ICON_NAMES.eyeOff}
                />
              </button>
            ) : (
              <Icon
                className='input-field__icon'
                name={iconName as ICON_NAMES}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <CSSTransition
        nodeRef={errorMessageRef}
        in={!!errorMessage}
        timeout={200}
        classNames='input-field__err-msg-transition'
        unmountOnExit
        onEnter={setHeightCSSVar}
        onExited={setHeightCSSVar}
      >
        <span ref={errorMessageRef} className='input-field__err-msg'>
          {errorMessage}
        </span>
      </CSSTransition>
    </div>
  )
}

export default InputField
