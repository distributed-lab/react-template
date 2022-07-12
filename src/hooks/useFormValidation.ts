import { get, isEmpty, isEqual } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from 'react'

type FormSchema = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Validator = (...params: any[]) => {
  isValid: boolean
  message: string
}

type ValidationErrors = Record<
  string,
  {
    message: string
  }
>

type ValidationFieldState = {
  isInvalid: boolean
  isDirty: boolean
  isError: boolean
  errors: ValidationErrors
}

type ValidationState = Record<keyof FormSchema, ValidationFieldState>

/**
 * Нужно, чтобы, в зависимости от formSchema, установились начальные значения
 * состояния валидации, и если будут ошибки, то после touch сообщение появится
 *
 * Дальше, к этому моменту состояние должно было иметь актуальные данные
 * @param formSchema
 * @param validationRules
 */
export const useFormValidation = (
  formSchema: FormSchema,
  // FIXME
  validationRules: Record<keyof FormSchema, Record<string, Validator>>,
) => {
  const validationDefaultState = useMemo(() => {
    return Object.keys(validationRules).reduce(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: {
          isInvalid: false,
          isDirty: false,
          isError: false,
          errors: [],
        },
      }),
      {},
    )
  }, [])

  const [validationState, setValidationState] = useState<ValidationState>(
    validationDefaultState,
  )

  useEffect(() => {
    setValidationState(validationState => {
      const newState = getValidationState()

      return isEqual(validationState, newState) ? validationState : newState
    })
  }, [formSchema, validationState])

  const getValidationState = useCallback((): ValidationState => {
    return Object.keys(validationRules).reduce((acc, fieldName) => {
      const validateResult = _validateField(fieldName)

      return {
        ...acc,
        ...validateResult,
      }
    }, {})
  }, [formSchema])

  const _validateField = (fieldName: string): ValidationState => {
    const fieldValidators = validationRules[fieldName]

    if (!fieldValidators || isEmpty(fieldValidators))
      throw new Error('Field has no validators')

    let errors = {} as ValidationErrors

    for (const validatorName in fieldValidators) {
      const validationResult = fieldValidators[validatorName](
        formSchema[fieldName],
      )

      if (!validationResult.isValid) {
        errors = {
          ...errors,
          [validatorName]: { message: validationResult.message },
        }
      }
    }

    return {
      [fieldName]: {
        ...(validationState ? validationState[fieldName] : {}),
        errors,
        isInvalid:
          !isEmpty(validationState && validationState[fieldName].errors) ||
          false,
        isError:
          (validationState &&
            validationState[fieldName].isDirty &&
            validationState &&
            validationState[fieldName].isInvalid) ||
          false,
        isDirty:
          (validationState && validationState[fieldName].isDirty) || false,
      },
    }
  }

  const isFormValid = (): boolean => {
    for (const key in validationState) {
      touchField(key)
      if (validationState[key].isInvalid) return false
    }
    return true
  }

  const getFieldErrorMessage = useCallback(
    (fieldPath: string) => {
      const validationField = get(validationState, fieldPath)

      if (!validationField) throw new Error('Field not found')
      else if (!Object.entries(validationField.errors)[0]) return ''

      // FIXME: on no errors
      return (
        (validationField.isError &&
          Object.entries(validationField.errors)[0][1].message) ||
        ''
      )
    },
    [formSchema],
  )

  const touchField = (fieldPath: string): void => {
    setValidationState(prevState => ({
      ...prevState,
      [fieldPath]: {
        ...validationState[fieldPath],
        isDirty: true,
      },
    }))
  }

  return {
    isFormValid,
    getFieldErrorMessage,
    touchField,
  }
}
