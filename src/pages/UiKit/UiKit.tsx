import './styles.scss'

import { motion, MotionProps } from 'framer-motion'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AppButton,
  BasicModal,
  Collapse,
  Drawer,
  ErrorMessage,
  Icon,
  Loader,
  NoDataMessage,
} from '@/common'
import { IconNames } from '@/enums'
import {
  BasicSelectField,
  CheckboxField,
  InputField,
  SelectField,
  SwitchField,
  TextareaField,
} from '@/fields'
import { bus, BUS_EVENTS, ErrorHandler } from '@/helpers'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

const SELECT_OPTIONS = ['1', '2', '3', '4', '5']

const BASIC_SELECT_OPTIONS = [
  {
    title: 'Option 1',
    value: '1',
    iconName: IconNames.check,
  },
  {
    title: 'Option 2',
    value: '2',
    iconName: IconNames.truck,
  },
  {
    title: 'Option 3',
    value: '3',
    iconName: IconNames.exclamation,
  },
]

const UiKit: FC<Props> = ({ ...rest }) => {
  const [input, setInput] = useState('')
  const [select, setSelect] = useState('')
  const [basicSelect, setBasicSelect] = useState('')
  const [textarea, setTextarea] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [switchValue, setSwitchValue] = useState(false)

  const [isCollapseShown, setIsCollapseShown] = useState(false)
  const [isDrawerShown, setIsDrawerShown] = useState(false)
  const [isModalShown, setIsModalShown] = useState(false)

  const { t } = useTranslation()

  const handleProcessError = useCallback(() => {
    ErrorHandler.process(new Error('some error message'))
  }, [])

  return (
    <motion.main className='ui-kit' {...rest}>
      <div className='ui-kit__buttons'>
        <AppButton size='small' text='button' />
        <AppButton size='small' text='button' scheme='flat' />
        <AppButton size='small' text='button' scheme='none' />

        <AppButton size='small' text='button' color='success' />
        <AppButton size='small' text='button' scheme='flat' color='success' />
        <AppButton size='small' text='button' scheme='none' color='success' />

        <AppButton size='small' text='button' color='error' />
        <AppButton size='small' text='button' scheme='flat' color='error' />
        <AppButton size='small' text='button' scheme='none' color='error' />

        <AppButton size='small' text='button' color='warning' />
        <AppButton size='small' text='button' scheme='flat' color='warning' />
        <AppButton size='small' text='button' scheme='none' color='warning' />

        <AppButton size='small' text='button' color='warning' />
        <AppButton size='small' text='button' scheme='flat' color='warning' />
        <AppButton size='small' text='button' scheme='none' color='warning' />

        <AppButton size='small' text='button' color='info' />
        <AppButton size='small' text='button' scheme='flat' color='info' />
        <AppButton size='small' text='button' scheme='none' color='info' />
      </div>
      <div className='ui-kit__buttons'>
        <AppButton text='button' />
        <AppButton text='button' scheme='flat' />
        <AppButton text='button' scheme='none' />

        <AppButton text='button' modification='border-circle' />
        <AppButton text='button' scheme='flat' modification='border-circle' />
        <AppButton text='button' scheme='none' modification='border-circle' />

        <AppButton text='button' modification='border-rounded' />
        <AppButton text='button' scheme='flat' modification='border-rounded' />
        <AppButton text='button' scheme='none' modification='border-rounded' />

        <AppButton text='button' modification='none' />
        <AppButton text='button' scheme='flat' modification='none' />
        <AppButton text='button' scheme='none' modification='none' />
      </div>
      <div className='ui-kit__buttons'>
        <AppButton size='large' text='button' />
        <AppButton size='large' text='button' scheme='flat' />
        <AppButton size='large' text='button' scheme='none' />
      </div>
      <div className='ui-kit__buttons'>
        <AppButton size='small' iconRight={IconNames.plus} />
        <AppButton size='small' iconRight={IconNames.plus} scheme='flat' />
        <AppButton size='small' iconRight={IconNames.plus} scheme='none' />

        <AppButton size='small' iconRight={IconNames.plus} color='success' />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='flat'
          color='success'
        />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='none'
          color='success'
        />

        <AppButton size='small' iconRight={IconNames.plus} color='error' />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='flat'
          color='error'
        />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='none'
          color='error'
        />

        <AppButton size='small' iconRight={IconNames.plus} color='warning' />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='flat'
          color='warning'
        />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='none'
          color='warning'
        />

        <AppButton size='small' iconRight={IconNames.plus} color='warning' />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='flat'
          color='warning'
        />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='none'
          color='warning'
        />

        <AppButton size='small' iconRight={IconNames.plus} color='info' />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='flat'
          color='info'
        />
        <AppButton
          size='small'
          iconRight={IconNames.plus}
          scheme='none'
          color='info'
        />
      </div>
      <div className='ui-kit__buttons'>
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
        />

        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          color='success'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
          color='success'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
          color='success'
        />

        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          color='error'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
          color='error'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
          color='error'
        />

        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          color='warning'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
          color='warning'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
          color='warning'
        />

        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          color='warning'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
          color='warning'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
          color='warning'
        />

        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          color='info'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='flat'
          color='info'
        />
        <AppButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.plus}
          scheme='none'
          color='info'
        />
      </div>

      <div className='ui-kit__buttons'>
        <AppButton
          size='small'
          text="'bus.success'"
          color='success'
          onClick={() => bus.emit(BUS_EVENTS.success, 'Some success message')}
        />
        <AppButton
          size='small'
          text="'bus.error'"
          color='error'
          onClick={() => bus.emit(BUS_EVENTS.error, 'Some error message')}
        />
        <AppButton
          size='small'
          text="'bus.warning'"
          color='warning'
          onClick={() => bus.emit(BUS_EVENTS.warning, 'Some warning message')}
        />
        <AppButton
          size='small'
          text="'bus.info'"
          color='info'
          onClick={() => bus.emit(BUS_EVENTS.info, 'Some info message')}
        />

        <AppButton
          size='small'
          text="'ErrorHandler.process'"
          color='error'
          onClick={handleProcessError}
        />
      </div>

      <div className='ui-kit__inputs'>
        <InputField value={input} updateValue={setInput} />
        <InputField value={input} updateValue={setInput} label={`label`} />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
        />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          errorMessage='error message'
        />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          nodeLeft={<Icon className='input__icon' name={IconNames.search} />}
        />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          nodeLeft={<Icon className='input__icon' name={IconNames.search} />}
          nodeRight={<Icon className='input__icon' name={IconNames.plus} />}
        />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          note='lorem ipsum dolor sit amet concestetur!'
          nodeLeft={<Icon className='input__icon' name={IconNames.search} />}
          nodeRight={<Icon className='input__icon' name={IconNames.plus} />}
        />
        <InputField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          note='lorem ipsum dolor sit amet concestetur!'
          isDisabled={true}
          nodeLeft={<Icon className='input__icon' name={IconNames.search} />}
          nodeRight={<Icon className='input__icon' name={IconNames.plus} />}
        />
      </div>

      <div className='ui-kit__select-fields'>
        <SelectField
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
        />
        <SelectField
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
        />
        <SelectField
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          errorMessage='error message'
        />
        <SelectField
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          note='Note message'
        />
        <SelectField
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          isDisabled={true}
        />

        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
        />

        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          errorMessage={`error message`}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          errorMessage={`error message`}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          errorMessage={`error message`}
        />

        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          note={`lorem ipsum dolor sit amet`}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          note={`lorem ipsum dolor sit amet`}
          errorMessage={basicSelect}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          note={`lorem ipsum dolor sit amet`}
        />

        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          isDisabled={true}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          isDisabled={true}
        />
        <BasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          isDisabled={true}
        />

        <TextareaField value={textarea} updateValue={setTextarea} />
        <TextareaField
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
        />
        <TextareaField
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          errorMessage='Error message'
        />
        <TextareaField
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          isDisabled={true}
        />
        <TextareaField
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          errorMessage='Error message'
          isDisabled={true}
        />

        <CheckboxField value={checkbox} updateValue={setCheckbox} />
        <CheckboxField
          value={checkbox}
          updateValue={setCheckbox}
          label={`Label`}
        />
        <CheckboxField
          value={checkbox}
          updateValue={setCheckbox}
          label={`Label`}
          isDisabled={true}
        />

        <SwitchField value={switchValue} updateValue={setSwitchValue} />
        <SwitchField
          value={switchValue}
          updateValue={setSwitchValue}
          model={String(switchValue)}
          label='Label'
        />
        <SwitchField
          value={switchValue}
          updateValue={setSwitchValue}
          model={String(switchValue)}
          isDisabled={true}
        />
      </div>

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
        <div className='ui-kit__drawer-wrp'>
          <AppButton
            className='ui-kit__drawer-btn'
            scheme='flat'
            text={t('ui-kit.drawer-btn')}
            onClick={() => setIsDrawerShown(!isDrawerShown)}
          />
          <Drawer isShown={isDrawerShown} updateIsShown={setIsDrawerShown}>
            <div className='ui-kit__drawer-body'>
              {t('ui-kit.drawer-text')}

              <AppButton
                className='ui-kit__drawer-close-btn'
                scheme='flat'
                text={t('ui-kit.drawer-close-btn')}
                onClick={() => setIsDrawerShown(false)}
              />
            </div>
          </Drawer>
        </div>

        <AppButton
          text={t('ui-kit.modal-btn')}
          onClick={() => setIsModalShown(true)}
        />
        <BasicModal
          className='ui-kit__basic-modal'
          isShown={isModalShown}
          updateIsShown={setIsModalShown}
          title={`Modal Title`}
          subtitle={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`}
        >
          <div className='ui-kit__modal-body'>{t('ui-kit.collapse-text')}</div>
        </BasicModal>

        <div className='ui-kit__icons'>
          <Icon name={IconNames.academicCap} />
          <Icon name={IconNames.adjustments} />
          <Icon name={IconNames.annotation} />
          <Icon name={IconNames.archive} />
          <Icon name={IconNames.arrowCircleDown} />
          <Icon name={IconNames.arrowCircleLeft} />
          <Icon name={IconNames.arrowCircleRight} />
          <Icon name={IconNames.arrowCircleUp} />
          <Icon name={IconNames.arrowDown} />
          <Icon name={IconNames.arrowLeft} />
        </div>
      </section>
    </motion.main>
  )
}

export default UiKit
