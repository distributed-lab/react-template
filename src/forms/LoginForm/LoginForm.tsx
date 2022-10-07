import './styles.scss'

import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AppButton } from '@/common'
import { InputField } from '@/fields'
import { Bus, ErrorHandler, sleep } from '@/helpers'
import { useForm, useFormValidation } from '@/hooks'
import { maxLength, minLength, required } from '@/validators'

const LoginForm = () => {
  const { t } = useTranslation()
  const [login, setLogin] = useState<string | number>('')
  const [password, setPassword] = useState<string | number>('')
  const [someComplexObject, setSomeComplexObject] = useState({
    fullName: {
      firstName: 'John',
      lastName: 'Doe',
    },
    ancestors: {
      mother: "Doe's mother",
      father: "Doe's father",
      grand: {
        mother: "Doe's grand mother",
        father: "Doe's grand father",
      },
    },
  })

  const { isFormDisabled, disableForm, enableForm } = useForm()
  const { isFormValid, getFieldErrorMessage, touchField } = useFormValidation(
    { login, password, someComplexObject },
    {
      login: { required },
      password: { required, minLength: minLength(6), maxLength: maxLength(32) },
      someComplexObject: {
        required,
        fullName: {
          required,
          firstName: { required, minLength: minLength(6) },
          lastName: { required, minLength: minLength(6) },
        },
        ancestors: {
          required,
          mother: { required, minLength: minLength(6) },
          father: { required },
          grand: {
            mother: { required, minLength: minLength(6) },
            father: { required },
          },
        },
      },
    },
  )

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    disableForm()
    try {
      await sleep(3000)
      Bus.success(t('login-form.login-success-msg'))
      Bus.success(`${login}, ${password}`)
    } catch (error) {
      ErrorHandler.process(error)
    }
    enableForm()
  }

  return (
    <form onSubmit={submit} className='login-form'>
      <InputField
        value={login}
        setValue={setLogin}
        label={t('login-form.login-lbl')}
        errorMessage={getFieldErrorMessage('login')}
        onBlur={() => touchField('login')}
        disabled={isFormDisabled}
      />
      <InputField
        type='password'
        value={password}
        setValue={setPassword}
        label={t('login-form.password-lbl')}
        errorMessage={getFieldErrorMessage('password')}
        onBlur={() => touchField('password')}
        disabled={isFormDisabled}
      />
      <pre>{JSON.stringify(someComplexObject)}</pre>
      <input
        type='text'
        value={someComplexObject.fullName.firstName}
        onInput={e => {
          setSomeComplexObject(prev => {
            const next = {
              ...prev,
              fullName: {
                ...prev.fullName,
                firstName: e.currentTarget?.value || '',
              },
            }

            return next
          })
        }}
        onBlur={() => touchField('someComplexObject.fullName.firstName')}
      />
      <span>
        {getFieldErrorMessage('someComplexObject.fullName.firstName')}
      </span>
      <div className='login-form__actions'>
        <AppButton
          text={t('login-form.submit-btn')}
          disabled={isFormDisabled}
        />
      </div>
    </form>
  )
}

export default LoginForm
