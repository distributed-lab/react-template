import './styles.scss'

import { FC, HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CheckboxField, InputField, SelectField } from '@/fields'

const InputsOverview: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [simpleInput, setSimpleInput] = useState<string | number>('')
  const [simpleSelect, setSimpleSelect] = useState<string | number>('')
  const [isChecked, setIsChecked] = useState(false)

  const { t } = useTranslation()

  return (
    <div className='inputs-overview'>
      <div className='inputs-overview__row'>
        <div className='inputs-overview__col'>
          <InputField
            value={simpleInput}
            setValue={setSimpleInput}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
          />
          <InputField
            value={simpleInput}
            setValue={setSimpleInput}
            label={t('inputs-overview.some-label')}
            errorMessage={simpleInput as string}
            placeholder={t('inputs-overview.some-placeholder')}
          />
          <InputField
            value={simpleInput}
            setValue={setSimpleInput}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
            disabled
          />
          <InputField
            value={simpleInput}
            setValue={setSimpleInput}
            label={t('inputs-overview.some-label')}
            errorMessage={t('inputs-overview.some-error-message')}
            placeholder={t('inputs-overview.some-placeholder')}
            disabled
          />
          <CheckboxField
            value={isChecked}
            setValue={setIsChecked}
            label={t('inputs-overview.some-label')}
          />
          <SelectField
            value={simpleSelect}
            setValue={setSimpleSelect}
            label={t('inputs-overview.some-label')}
            errorMessage={simpleSelect as string}
          >
            <option value=''>select field</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </SelectField>
        </div>
      </div>
    </div>
  )
}

export default InputsOverview
