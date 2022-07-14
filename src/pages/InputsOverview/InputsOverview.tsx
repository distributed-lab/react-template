import './styles.scss'

import { FC, HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'
import { CheckboxField, InputField, SelectField } from '@/fields'

const selectOptions: {
  id: number
  title: string
  iconName: ICON_NAMES
}[] = [
  {
    id: 1,
    title: 'icon 1',
    iconName: ICON_NAMES.gift,
  },
  {
    id: 2,
    title: 'icon 2',
    iconName: ICON_NAMES.eyeOff,
  },
  {
    id: 3,
    title: 'icon 3',
    iconName: ICON_NAMES.logout,
  },
  {
    id: 4,
    title: 'icon 4',
    iconName: ICON_NAMES.dotsVertical,
  },
]

const InputsOverview: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [simpleInput, setSimpleInput] = useState<string | number>('')
  const [simpleSelect, setSimpleSelect] = useState<string | number>(
    selectOptions[3].id,
  )
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
        </div>
        <div className='inputs-overview__col'>
          <SelectField
            options={selectOptions.map(el => el.id)}
            value={simpleSelect}
            setValue={setSimpleSelect}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
          >
            {selectOptions.map((el, idx) => (
              <div
                className='inputs-overview__select-option'
                key={idx}
                defaultValue={el.id}
              >
                <Icon
                  className='inputs-overview__select-option-icon'
                  name={el.iconName}
                />
                {el.title}
              </div>
            ))}
          </SelectField>
          <SelectField
            options={selectOptions.map(el => el.id)}
            value={simpleSelect}
            setValue={setSimpleSelect}
            label={t('inputs-overview.some-label')}
            placeholder={t('inputs-overview.some-placeholder')}
            errorMessage={String(simpleSelect) as string}
          >
            {selectOptions.map((el, idx) => (
              <div
                className='inputs-overview__select-option'
                key={idx}
                defaultValue={el.id}
              >
                <Icon
                  className='inputs-overview__select-option-icon'
                  name={el.iconName}
                />
                {el.title}
              </div>
            ))}
          </SelectField>
        </div>
      </div>
    </div>
  )
}

export default InputsOverview
