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
  const [login, setLogin] = useState<string | number>('qwerty')
  const [password, setPassword] = useState<string | number>(
    'qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty',
  )

  const { isFormDisabled, disableForm, enableForm } = useForm()
  const { isFormValid, getFieldErrorMessage, touchField } = useFormValidation(
    { login, password },
    {
      login: { required },
      password: { required, minLength: minLength(6), maxLength: maxLength(32) },
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
