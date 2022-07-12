import { get, isEmpty } from 'lodash-es'
import { useCallback, useEffect, useState } from 'react'

type FormSchema = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Validator = (...params: any[]) => {
  isValid: boolean
  message: string
}

type ValidationFieldState = {
  isInvalid: boolean
  isDirty: boolean
  isError: boolean
  errors: Record<string, { message: string }>
}

type ValidationState = Record<keyof FormSchema, ValidationFieldState>

export const useFormValidation = (
  formSchema: FormSchema,
  // FIXME
  validationRules: Record<keyof FormSchema, Record<string, Validator>>,
) => {
  // FIXME
  const getValidationState = useCallback((): ValidationState => {
    return Object.keys(validationRules).reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          isInvalid: false,
          isDirty: false,
          isError: false,
          errors: [],
        },
      }),
      {},
    )
  }, [validationRules])

  const [validationState, setValidationState] = useState(getValidationState())

  useEffect(() => {
    _updateValidationState()
  }, [])

  const _updateValidationState = () => {
    Object.keys(formSchema).forEach(el => {
      _validateField(el)
    })
  }

  const _validateField = (fieldName: string) => {
    const fieldValidators = validationRules[fieldName]

    if (!fieldValidators || isEmpty(fieldValidators)) return

    for (const fieldValidatorsKey in fieldValidators) {
      const validationResult = fieldValidators[fieldValidatorsKey](
        formSchema[fieldName],
      )

      if (!validationResult.isValid) {
        setValidationState({
          ...validationState,
          [fieldName]: {
            ...validationState[fieldName],
            errors: {
              ...validationState[fieldName].errors,
              [fieldValidatorsKey]: {
                message: validationResult.message,
              },
            },
            isInvalid: !isEmpty(validationState[fieldName].errors),
            isError:
              validationState[fieldName].isDirty &&
              validationState[fieldName].isInvalid,
          },
        })
      }
    }
  }

  const isFormValid = (): boolean => {
    for (const key in validationState) {
      touchField(key)
      if (validationState[key].isInvalid) return false
    }
    return true
  }

  const getFieldErrorMessage = (fieldPath: string) => {
    const validationField = get(validationState, fieldPath)

    if (!validationField) throw new Error('Field not found')

    return (
      (validationField.isError &&
        Object.entries(validationField.errors)[0][1].message) ||
      ''
    )
  }

  const touchField = (fieldPath: string): void => {
    setValidationState({
      ...validationState,
      [fieldPath]: {
        ...validationState[fieldPath],
        isDirty: true,
      },
    })
  }

  return {
    isFormValid,
    getFieldErrorMessage,
    touchField,
  }
}
