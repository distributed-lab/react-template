import './styles.scss'

import { motion, MotionProps } from 'framer-motion'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AppButton,
  Collapse,
  ErrorMessage,
  Icon,
  Loader,
  Modal,
  NoDataMessage,
} from '@/common'
import { ICON_NAMES, RoutesPaths } from '@/enums'
import { CheckboxField, InputField, SelectField } from '@/fields'
import LoginForm from '@/forms/LoginForm'
import { Bus } from '@/helpers'

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

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

const UiKit: FC<Props> = ({ ...rest }) => {
  const [simpleInput, setSimpleInput] = useState<string | number>('')
  const [simpleSelect, setSimpleSelect] = useState<string | number>(
    selectOptions[3].id,
  )
  const [checkboxInput, setCheckboxInput] = useState(false)

  const [isCollapseShown, setIsCollapseShown] = useState(false)
  const [isModalShown, setIsModalShown] = useState(false)

  const { t } = useTranslation()

  const handleClick = () => {
    alert('some string')
  }

  const throwBusSuccess = useCallback(() => {
    Bus.success('Success')
  }, [])

  const throwBusError = useCallback(() => {
    Bus.error('Error')
  }, [])

  const throwBusWarning = useCallback(() => {
    Bus.warning('Warning')
  }, [])

  const throwBusInfo = useCallback(() => {
    Bus.info('Info')
  }, [])

  return (
    <motion.main className='ui-kit' {...rest}>
      <section className='ui-kit__buttons'>
        <AppButton
          iconRight={ICON_NAMES.gift}
          text='router, border-rounded, icon'
          routePath={RoutesPaths.storeOverview}
        />
        <AppButton
          modification='border-circle'
          text='href, border-circle'
          href='https://www.youtube.com/'
          target='_blank'
        />
        <AppButton
          text='Alert, icon-first'
          iconLeft={ICON_NAMES.exclamationCircle}
          onClick={handleClick}
        />
        <AppButton size='large' text='large' />
        <AppButton size='small' text='small' />
        <AppButton
          color='success'
          text='Bus.success, success'
          onClick={throwBusSuccess}
        />
        <AppButton
          color='error'
          text='Bus.error, error'
          onClick={throwBusError}
        />
        <AppButton
          color='warning'
          text='Bus.warning, warning'
          onClick={throwBusWarning}
        />
        <AppButton color='info' text='Bus.info, info' onClick={throwBusInfo} />
        <AppButton
          modification='border-circle'
          color='success'
          text='border-circle, success'
        />
        <AppButton
          modification='border-rounded'
          color='error'
          text='border-rounded, error'
        />
        <AppButton color='warning' size='large' text='large, warning' />
        <AppButton color='info' size='small' text='small, info' />
        <AppButton scheme='flat' text='flat' />
        <AppButton
          scheme='flat'
          modification='border-circle'
          text='flat, border-circle'
        />
        <AppButton
          scheme='flat'
          iconLeft={ICON_NAMES.switchHorizontal}
          text='flat'
        />
        <AppButton
          scheme='flat'
          size='large'
          text='flat, large'
          iconRight={ICON_NAMES.phone}
        />
        <AppButton scheme='flat' size='small' text='flat, small' />
        <AppButton scheme='flat' color='success' text='flat, success' />
        <AppButton scheme='flat' color='error' text='flat, error' />
        <AppButton scheme='flat' color='warning' text='flat, warning' />
        <AppButton scheme='flat' color='info' text='flat, info' />
        <AppButton
          scheme='flat'
          modification='border-circle'
          color='success'
          text='flat, border-circle, success'
        />
        <AppButton
          scheme='flat'
          modification='border-circle'
          color='error'
          text='flat, border-circle, error'
        />
        <AppButton
          scheme='flat'
          modification='border-circle'
          iconLeft={ICON_NAMES.gift}
          text='flat'
        />
        <AppButton
          scheme='flat'
          modification='border-circle'
          color='warning'
          size='large'
          text='flat, border-circle, large, warning'
        />
        <AppButton
          scheme='flat'
          modification='border-circle'
          size='small'
          color='info'
          text='flat, border-circle, small, info'
        />
        <AppButton
          scheme='default'
          modification='default'
          size='default'
          color='default'
          text='default'
        />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} />
        <AppButton
          iconRight={ICON_NAMES.switchHorizontal}
          modification='border-circle'
        />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} size='large' />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} size='small' />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} color='success' />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} color='error' />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} color='warning' />
        <AppButton iconRight={ICON_NAMES.switchHorizontal} color='info' />
        <AppButton scheme='flat' iconRight={ICON_NAMES.switchHorizontal} />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          modification='border-circle'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          size='large'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          size='small'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          color='success'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          color='error'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          color='warning'
        />
        <AppButton
          scheme='flat'
          iconRight={ICON_NAMES.switchHorizontal}
          color='info'
        />
        <AppButton
          scheme='default'
          iconRight={ICON_NAMES.switchHorizontal}
          color='default'
        />
        <AppButton
          scheme='default'
          iconRight={ICON_NAMES.switchHorizontal}
          color='default'
          size='default'
        />
      </section>
      <section className='ui-kit__inputs'>
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
        />
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          nodeLeft={
            <Icon className='ui-kit__input-icon' name={ICON_NAMES.phone} />
          }
          errorMessage={simpleInput as string}
        />
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          nodeRight={
            <Icon className='ui-kit__input-icon' name={ICON_NAMES.gift} />
          }
        />
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          nodeLeft={
            <Icon className='ui-kit__input-icon' name={ICON_NAMES.phone} />
          }
          nodeRight={
            <Icon className='ui-kit__input-icon' name={ICON_NAMES.gift} />
          }
        />
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          type='password'
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
        />
        <InputField
          value={simpleInput}
          setValue={setSimpleInput}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          disabled
        />
        <SelectField
          options={selectOptions.map(el => el.id)}
          value={simpleSelect}
          setValue={setSimpleSelect}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          errorMessage={simpleInput as string}
        >
          {selectOptions.map((el, idx) => (
            <div
              className='ui-kit__select-option'
              key={idx}
              defaultValue={el.id}
            >
              <Icon className='ui-kit__select-option-icon' name={el.iconName} />
              {el.title}
            </div>
          ))}
        </SelectField>
        <SelectField
          options={selectOptions.map(el => el.id)}
          value={simpleSelect}
          setValue={setSimpleSelect}
          label={t('ui-kit.some-label')}
          placeholder={t('ui-kit.some-placeholder')}
          errorMessage={String(simpleSelect) as string}
        >
          {selectOptions.map((el, idx) => (
            <div
              className='ui-kit__select-option'
              key={idx}
              defaultValue={el.id}
            >
              <Icon className='ui-kit__select-option-icon' name={el.iconName} />
              {el.title}
            </div>
          ))}
        </SelectField>
        <CheckboxField
          value={checkboxInput}
          setValue={setCheckboxInput}
          label={t('ui-kit.some-label')}
        />
        <CheckboxField
          value={checkboxInput}
          setValue={setCheckboxInput}
          label={t('ui-kit.some-label')}
          disabled
        />
      </section>
      <section className='ui-kit__form'>
        <LoginForm />
      </section>
      <section className='ui-kit__common'>
        <ErrorMessage message={t('ui-kit.loading-error-msg')} />
        <NoDataMessage message={t('ui-kit.no-data-msg')} />
        <Loader />
        <div className='ui-kit__collapse-wrp'>
          <AppButton
            className='ui-kit__collapse-btn'
            scheme='flat'
            text={t('ui-kit.collapse-btn')}
            onClick={() => setIsCollapseShown(!isCollapseShown)}
          />
          <Collapse isOpen={isCollapseShown}>
            <div className='ui-kit__collapse-body'>
              {t('ui-kit.collapse-text')}
            </div>
          </Collapse>
        </div>
        <AppButton
          text={t('ui-kit.modal-btn')}
          onClick={() => setIsModalShown(true)}
        />
        <Modal isShown={isModalShown} setIsShown={setIsModalShown}>
          <div className='ui-kit__modal-head'>
            <h2 className='ui-kit__modal-title'>{t('ui-kit.modal-title')}</h2>
            <AppButton
              onClick={() => setIsModalShown(false)}
              iconRight={ICON_NAMES.x}
              scheme='default'
              modification='default'
              size='default'
              color='default'
            />
          </div>
          <div className='ui-kit__modal-body'>
            <span className='ui-kit__modal-text'>{t('ui-kit.modal-body')}</span>
            <AppButton
              className='ui-kit__modal-action-btn'
              scheme='flat'
              color='error'
              size='small'
              text={t('ui-kit.modal-cancel-btn')}
              onClick={() => setIsModalShown(false)}
            />
            <AppButton
              className='ui-kit__modal-action-btn'
              color='success'
              size='small'
              text={t('ui-kit.modal-accept-btn')}
              onClick={() => {
                setIsModalShown(false)
                Bus.success(t('ui-kit.modal-success-msg'))
              }}
            />
          </div>
        </Modal>
        <div className='ui-kit__icons'>
          <Icon name={ICON_NAMES.academicCap} />
          <Icon name={ICON_NAMES.adjustments} />
          <Icon name={ICON_NAMES.annotation} />
          <Icon name={ICON_NAMES.archive} />
          <Icon name={ICON_NAMES.arrowCircleDown} />
          <Icon name={ICON_NAMES.arrowCircleLeft} />
          <Icon name={ICON_NAMES.arrowCircleRight} />
          <Icon name={ICON_NAMES.arrowCircleUp} />
          <Icon name={ICON_NAMES.arrowDown} />
          <Icon name={ICON_NAMES.arrowLeft} />
          <Icon name={ICON_NAMES.arrowNarrowDown} />
          <Icon name={ICON_NAMES.arrowNarrowLeft} />
          <Icon name={ICON_NAMES.arrowNarrowRight} />
          <Icon name={ICON_NAMES.arrowNarrowUp} />
          <Icon name={ICON_NAMES.arrowRight} />
          <Icon name={ICON_NAMES.arrowSmDown} />
          <Icon name={ICON_NAMES.arrowSmLeft} />
          <Icon name={ICON_NAMES.arrowSmRight} />
          <Icon name={ICON_NAMES.arrowSmUp} />
          <Icon name={ICON_NAMES.arrowUp} />
          <Icon name={ICON_NAMES.arrowsExpand} />
          <Icon name={ICON_NAMES.atSymbol} />
          <Icon name={ICON_NAMES.backspace} />
          <Icon name={ICON_NAMES.badgeCheck} />
          <Icon name={ICON_NAMES.ban} />
          <Icon name={ICON_NAMES.beaker} />
          <Icon name={ICON_NAMES.bell} />
          <Icon name={ICON_NAMES.bookOpen} />
          <Icon name={ICON_NAMES.bookmarkAlt} />
          <Icon name={ICON_NAMES.bookmark} />
          <Icon name={ICON_NAMES.briefcase} />
          <Icon name={ICON_NAMES.calendar} />
          <Icon name={ICON_NAMES.camera} />
          <Icon name={ICON_NAMES.cash} />
          <Icon name={ICON_NAMES.chartBar} />
        </div>
      </section>
    </motion.main>
  )
}

export default UiKit
