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
      lastName: 'Doekhbkjhbkhbkh',
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
  const [somePrimitiveArray, setSomePrimitiveArray] = useState([
    'one',
    'two',
    'three',
  ])
  const [someObjectArray, setSomeObjectArray] = useState([
    {
      id: '1',
      name: 'one',
    },
    {
      id: '2',
      name: 'two',
    },
    {
      id: '3',
      name: 'three',
    },
  ])
  const [someObjectWithArray, setSomeObjectWithArray] = useState({
    arrayProperty: ['Yo', 'i', 'am', 'a', 'primitive'],
    objectArrayProperty: [
      {
        id: '1',
        label: 'Yo',
      },
      {
        id: '2',
        label: 'i',
      },
      {
        id: '3',
        label: 'am',
      },
      {
        id: '4',
        label: 'a',
      },
      {
        id: '5',
        label: 'primitive',
      },
    ],
  })

  const { isFormDisabled, disableForm, enableForm } = useForm()
  const {
    isFieldsValid,
    touchForm,
    getFieldErrorMessage,
    touchField,
    isFieldValid,
  } = useFormValidation(
    {
      login,
      password,
      someComplexObject,
      somePrimitiveArray,
      someObjectArray,
      someObjectWithArray,
    },
    {
      login: { required },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(32),
      },
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
      somePrimitiveArray: {
        required,
        $every: {
          required,
          minLength: minLength(10),
        },
      },
      someObjectArray: {
        required,
        $every: {
          id: { required },
          name: { required, minLength: minLength(10) },
        },
      },
      someObjectWithArray: {
        required,
        arrayProperty: {
          required,
          $every: {
            required,
            minLength: minLength(10),
          },
        },
        objectArrayProperty: {
          required,
          $every: {
            id: { required },
            label: { required, minLength: minLength(10) },
          },
        },
      },
    },
  )

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    touchForm()
    if (!isFieldsValid) {
      Bus.error('form invalid')
      return
    }

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
      <h3>{t('login-form.primitives-title')}</h3>
      <div className='login-form__row'>
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
      </div>
      <h3>{t('login-form.nested-object-title')}</h3>
      <div className='login-form__row'>
        <InputField
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
          label={'someComplexObject.fullName.firstName'}
          errorMessage={getFieldErrorMessage(
            'someComplexObject.fullName.firstName',
          )}
          onBlur={() => touchField('someComplexObject.fullName.firstName')}
        />
        <AppButton
          type='button'
          text={'isFieldValid'}
          size='small'
          onClick={() => {
            Bus.info(
              String(isFieldValid('someComplexObject.fullName.firstName')),
            )
          }}
        />
      </div>
      <h3>{t('login-form.primitive-array-title')}</h3>
      <div className='login-form__row'>
        {somePrimitiveArray.map((item, index) => (
          <InputField
            key={`primitive-array-${index}`}
            value={item}
            onInput={e => {
              setSomePrimitiveArray(prev => {
                const next = [...prev]
                next[index] = e.currentTarget?.value || ''
                return next
              })
            }}
            label={`somePrimitiveArray[${index}]`}
            errorMessage={getFieldErrorMessage(`somePrimitiveArray[${index}]`)}
            onBlur={() => touchField(`somePrimitiveArray[${index}]`)}
          />
        ))}
      </div>
      <h3>{t('login-form.object-array-title')}</h3>
      <div className='login-form__row'>
        {someObjectArray.map((item, index) => (
          <div className='login-form__controls' key={`object-array-${index}`}>
            <InputField
              value={item.id}
              onInput={e => {
                setSomeObjectArray(prev => {
                  const next = [...prev]
                  next[index] = {
                    ...next[index],
                    id: e.currentTarget?.value || '',
                  }
                  return next
                })
              }}
              label={`someObjectArray[${index}].id`}
              errorMessage={getFieldErrorMessage(
                `someObjectArray[${index}].id`,
              )}
              onBlur={() => touchField(`someObjectArray[${index}].id`)}
            />
            <InputField
              value={item.name}
              onInput={e => {
                setSomeObjectArray(prev => {
                  const next = [...prev]
                  next[index] = {
                    ...next[index],
                    name: e.currentTarget?.value || '',
                  }
                  return next
                })
              }}
              label={`someObjectArray[${index}].name`}
              errorMessage={getFieldErrorMessage(
                `someObjectArray[${index}].name`,
              )}
              onBlur={() => touchField(`someObjectArray[${index}].name`)}
            />
          </div>
        ))}
      </div>
      <h3>{t('login-form.object-and-array-combine-title')}</h3>
      <div className='login-form__row'>
        <div className='login-form__col'>
          {someObjectWithArray.arrayProperty.map((item, index) => (
            <InputField
              key={`someObjectWithArray.arrayProperty-${index}`}
              value={item}
              onInput={e => {
                setSomeObjectWithArray(prev => {
                  const next = { ...prev }
                  next.arrayProperty[index] = e.currentTarget?.value || ''
                  return next
                })
              }}
              label={`someObjectWithArray.arrayProperty[${index}]`}
              errorMessage={getFieldErrorMessage(
                `someObjectWithArray.arrayProperty[${index}]`,
              )}
              onBlur={() =>
                touchField(`someObjectWithArray.arrayProperty[${index}]`)
              }
            />
          ))}
        </div>
        <div className='login-form__col'>
          {someObjectWithArray.objectArrayProperty.map((item, index) => (
            <div
              className='login-form__controls'
              key={`someObjectWithArray.objectArrayProperty-${index}`}
            >
              <InputField
                value={item.id}
                onInput={e => {
                  setSomeObjectWithArray(prev => {
                    const next = { ...prev }
                    next.objectArrayProperty[index] = {
                      ...next.objectArrayProperty[index],
                      id: e.currentTarget?.value || '',
                    }
                    return next
                  })
                }}
                label={`someObjectWithArray.objectArrayProperty[${index}].id`}
                errorMessage={getFieldErrorMessage(
                  `someObjectWithArray.objectArrayProperty[${index}].id`,
                )}
                onBlur={() =>
                  touchField(
                    `someObjectWithArray.objectArrayProperty[${index}].id`,
                  )
                }
              />
              <InputField
                value={item.label}
                onInput={e => {
                  setSomeObjectWithArray(prev => {
                    const next = { ...prev }
                    next.objectArrayProperty[index] = {
                      ...next.objectArrayProperty[index],
                      label: e.currentTarget?.value || '',
                    }
                    return next
                  })
                }}
                label={`someObjectWithArray.objectArrayProperty[${index}].label`}
                errorMessage={getFieldErrorMessage(
                  `someObjectWithArray.objectArrayProperty[${index}].label`,
                )}
                onBlur={() =>
                  touchField(
                    `someObjectWithArray.objectArrayProperty[${index}].label`,
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
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
