import './styles.scss'

import {
  Dispatch,
  FC,
  FormEventHandler,
  HTMLAttributes,
  SetStateAction,
  useRef,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'

interface Props extends HTMLAttributes<HTMLSelectElement> {
  value: string | number
  setValue: Dispatch<SetStateAction<string | number>>
  label?: string
  placeholder?: string
  errorMessage?: string
  disabled?: string | boolean
  readonly?: string | boolean
  tabindex?: number
}

const SelectField: FC<Props> = ({
  value,
  setValue,
  label,
  placeholder = ' ',
  errorMessage,
  disabled,
  readonly,
  tabindex,
  children,
  className,
  ...rest
}) => {
  const uid = uuidv4()
  const errorMessageRef = useRef<HTMLDivElement>(null)

  const isDisabled = ['', 'disabled', true].includes(
    disabled as string | boolean,
  )

  const isReadonly = ['', 'readonly', true].includes(
    readonly as string | boolean,
  )

  const selectClasses = [
    'select-field',
    className,
    ...[
      ...(isDisabled ? ['disabled'] : []),
      ...(isReadonly ? ['readonly'] : []),
      ...(errorMessage ? ['error'] : []),
    ].map(el => `select-field--${el}`),
  ].join(' ')

  const onChange = (event: Event) => {
    const target = event.target as HTMLSelectElement

    setValue(target.value)
  }

  const setHeightCSSVar = () => {
    errorMessageRef.current?.style.setProperty(
      '--field-error-msg-height',
      `${errorMessageRef.current?.scrollHeight}px`,
    )
  }

  return (
    <div className={selectClasses}>
      {label ? (
        <label
          className='select-field__label'
          htmlFor={`select-field__select-${uid}`}
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      <div className='select-field__select-wrp'>
        <select
          id={`select-field__select-${uid}`}
          className='select-field__select'
          name={`select-field__select-${uid}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange as unknown as FormEventHandler<HTMLSelectElement>}
          tabIndex={isDisabled || isReadonly ? -1 : tabindex}
          disabled={isDisabled || isReadonly}
          {...rest}
        >
          {children}
        </select>
      </div>
      <CSSTransition
        nodeRef={errorMessageRef}
        in={!!errorMessage}
        timeout={200}
        classNames='select-field__err-msg-transition'
        unmountOnExit
        onEnter={setHeightCSSVar}
        onExited={setHeightCSSVar}
      >
        <span ref={errorMessageRef} className='select-field__err-msg'>
          {errorMessage}
        </span>
      </CSSTransition>
    </div>
  )
}

export default SelectField
