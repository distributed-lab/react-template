import './styles.scss'

import {
  Dispatch,
  FormEvent,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { UiCollapse } from '@/ui'

interface Props extends HTMLAttributes<HTMLDivElement> {
  scheme?: 'primary'
  value: string
  updateValue?: Dispatch<SetStateAction<string>>
  label?: string
  placeholder?: string
  errorMessage?: string
  note?: string
  tabindex?: number
  isDisabled?: boolean
  isReadonly?: boolean
}

export default function UiTextarea({
  scheme = 'primary',
  value,
  updateValue,
  label = '',
  placeholder = ' ',
  errorMessage = '',
  note = '',
  tabindex,
  isDisabled,
  isReadonly,
}: Props) {
  const uid = uuidv4()

  const textareaClasses = useMemo(
    () =>
      [
        'ui-textarea',
        ...(isDisabled ? ['ui-textarea--disabled'] : []),
        ...(isReadonly ? ['ui-textarea--readonly'] : []),
        ...(errorMessage ? ['ui-textarea--error'] : []),
        `ui-textarea--${scheme}`,
      ].join(' '),
    [errorMessage, isDisabled, isReadonly, scheme],
  )

  const handleInput = useCallback(
    (e: FormEvent<HTMLTextAreaElement>) => {
      const eventTarget = e.target as HTMLTextAreaElement

      if (value === eventTarget.value) return

      updateValue?.(eventTarget.value)
    },
    [updateValue, value],
  )

  return (
    <>
      <div className={textareaClasses}>
        <div className='ui-textarea__textarea-wrp'>
          <textarea
            className='ui-textarea__textarea'
            id={`ui-textarea--${uid}`}
            value={value}
            placeholder={!label ? placeholder : ' '}
            tabIndex={isDisabled || isReadonly ? -1 : (tabindex as number)}
            disabled={isDisabled || isReadonly}
            onInput={handleInput}
          />
          {label ? (
            <label
              htmlFor={`ui-textarea--${uid}`}
              className='ui-textarea__label'
            >
              {label}
            </label>
          ) : (
            <></>
          )}
        </div>
        <UiCollapse isOpen={!!errorMessage || !!note}>
          {errorMessage ? (
            <span className='ui-textarea__err-msg'>{errorMessage}</span>
          ) : note ? (
            <span className='ui-textarea__note'>{note}</span>
          ) : (
            <></>
          )}
        </UiCollapse>
      </div>
    </>
  )
}
