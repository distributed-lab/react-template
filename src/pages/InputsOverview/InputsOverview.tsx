import './styles.scss'

import { FC, HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { InputField } from '@/fields'

const InputsOverview: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [simple, setSimple] = useState<string | number>('')

  const { t } = useTranslation()

  return (
    <div className='inputs-overview'>
      <div className='inputs-overview__row'>
        <div className='inputs-overview__col'>
          <InputField
            value={simple}
            setValue={setSimple}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
          />
          <InputField
            value={simple}
            setValue={setSimple}
            label={t('inputs-overview.some-label')}
            errorMessage={simple as string}
            placeholder={t('inputs-overview.some-placeholder')}
          />
          <InputField
            value={simple}
            setValue={setSimple}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
            disabled
          />
          <InputField
            value={simple}
            setValue={setSimple}
            label={t('inputs-overview.some-label')}
            errorMessage={t('inputs-overview.some-error-message')}
            placeholder={t('inputs-overview.some-placeholder')}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default InputsOverview
