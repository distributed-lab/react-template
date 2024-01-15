import './styles.scss'

import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useToastsManager } from '@/contexts'
import { IconNames } from '@/enums'
import { bus, BusEvents, ErrorHandler } from '@/helpers'
import {
  UiBasicModal,
  UiBasicSelectField,
  UiButton,
  UiCheckbox,
  UiCollapse,
  UiDrawer,
  UiErrorMessage,
  UiIcon,
  UiNoDataMessage,
  UiSelect,
  UiSkeleton,
  UiSkeletonTable,
  UiSpinner,
  UiSwitch,
  UiTextarea,
  UiTextField,
} from '@/ui'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

const SELECT_OPTIONS = ['1', '2', '3', '4', '5']

const BASIC_SELECT_OPTIONS = [
  {
    title: 'Option 1',
    value: '1',
    iconName: IconNames.Check,
  },
  {
    title: 'Option 2',
    value: '2',
    iconName: IconNames.AcademicCap,
  },
  {
    title: 'Option 3',
    value: '3',
    iconName: IconNames.Exclamation,
  },
]

export default function UiKit({ ...rest }: Props) {
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

  const { showToast } = useToastsManager()

  return (
    <motion.main className='ui-kit' {...rest}>
      <div className='ui-kit__buttons'>
        <UiButton size='small' text='button' />
        <UiButton size='small' text='button' scheme='flat' />
        <UiButton size='small' text='button' scheme='none' />

        <UiButton size='small' text='button' color='success' />
        <UiButton size='small' text='button' scheme='flat' color='success' />
        <UiButton size='small' text='button' scheme='none' color='success' />

        <UiButton size='small' text='button' color='error' />
        <UiButton size='small' text='button' scheme='flat' color='error' />
        <UiButton size='small' text='button' scheme='none' color='error' />

        <UiButton size='small' text='button' color='warning' />
        <UiButton size='small' text='button' scheme='flat' color='warning' />
        <UiButton size='small' text='button' scheme='none' color='warning' />

        <UiButton size='small' text='button' color='warning' />
        <UiButton size='small' text='button' scheme='flat' color='warning' />
        <UiButton size='small' text='button' scheme='none' color='warning' />

        <UiButton size='small' text='button' color='info' />
        <UiButton size='small' text='button' scheme='flat' color='info' />
        <UiButton size='small' text='button' scheme='none' color='info' />
      </div>
      <div className='ui-kit__buttons'>
        <UiButton text='button' />
        <UiButton text='button' scheme='flat' />
        <UiButton text='button' scheme='none' />

        <UiButton text='button' modification='border-circle' />
        <UiButton text='button' scheme='flat' modification='border-circle' />
        <UiButton text='button' scheme='none' modification='border-circle' />

        <UiButton text='button' modification='border-rounded' />
        <UiButton text='button' scheme='flat' modification='border-rounded' />
        <UiButton text='button' scheme='none' modification='border-rounded' />

        <UiButton text='button' modification='none' />
        <UiButton text='button' scheme='flat' modification='none' />
        <UiButton text='button' scheme='none' modification='none' />
      </div>
      <div className='ui-kit__buttons'>
        <UiButton size='large' text='button' />
        <UiButton size='large' text='button' scheme='flat' />
        <UiButton size='large' text='button' scheme='none' />
      </div>
      <div className='ui-kit__buttons'>
        <UiButton size='small' iconRight={IconNames.Plus} />
        <UiButton size='small' iconRight={IconNames.Plus} scheme='flat' />
        <UiButton size='small' iconRight={IconNames.Plus} scheme='none' />

        <UiButton size='small' iconRight={IconNames.Plus} color='success' />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='success'
        />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='none'
          color='success'
        />

        <UiButton size='small' iconRight={IconNames.Plus} color='error' />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='error'
        />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='none'
          color='error'
        />

        <UiButton size='small' iconRight={IconNames.Plus} color='warning' />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='warning'
        />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='none'
          color='warning'
        />

        <UiButton size='small' iconRight={IconNames.Plus} color='warning' />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='warning'
        />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='none'
          color='warning'
        />

        <UiButton size='small' iconRight={IconNames.Plus} color='info' />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='info'
        />
        <UiButton
          size='small'
          iconRight={IconNames.Plus}
          scheme='none'
          color='info'
        />
      </div>
      <div className='ui-kit__buttons'>
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
        />

        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          color='success'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='success'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
          color='success'
        />

        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          color='error'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='error'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
          color='error'
        />

        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          color='warning'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='warning'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
          color='warning'
        />

        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          color='warning'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='warning'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
          color='warning'
        />

        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          color='info'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='flat'
          color='info'
        />
        <UiButton
          size='small'
          modification='border-circle'
          iconRight={IconNames.Plus}
          scheme='none'
          color='info'
        />
      </div>

      <div className='ui-kit__buttons'>
        <UiButton
          size='small'
          text='custom'
          onClick={() =>
            showToast(
              BusEvents.Success,
              <div className='ui-kit__custom-toast'>
                <h3 className='ui-kit__custom-toast-title'>{`Hello yopta`}</h3>
                <span className='ui-kit__custom-toast-message'>{`lol kek cheburek`}</span>
                <UiButton
                  text={'click me'}
                  onClick={() =>
                    bus.emit(BusEvents.Success, 'Some success message')
                  }
                />
              </div>,
            )
          }
        />
        <UiButton
          size='small'
          text="'bus.success'"
          color='success'
          onClick={() => bus.emit(BusEvents.Success, 'Some success message')}
        />
        <UiButton
          size='small'
          text="'bus.error'"
          color='error'
          onClick={() => bus.emit(BusEvents.Error, 'Some error message')}
        />
        <UiButton
          size='small'
          text="'bus.warning'"
          color='warning'
          onClick={() => bus.emit(BusEvents.Warning, 'Some warning message')}
        />
        <UiButton
          size='small'
          text="'bus.info'"
          color='info'
          onClick={() => bus.emit(BusEvents.Info, 'Some info message')}
        />

        <UiButton
          size='small'
          text="'ErrorHandler.process'"
          color='error'
          onClick={handleProcessError}
        />
      </div>

      <div className='ui-kit__inputs'>
        <UiTextField value={input} updateValue={setInput} />
        <UiTextField value={input} updateValue={setInput} label={`label`} />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
        />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          errorMessage='error message'
        />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          nodeLeft={<UiIcon className='input__icon' name={IconNames.Plus} />}
        />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          nodeLeft={<UiIcon className='input__icon' name={IconNames.Plus} />}
          nodeRight={<UiIcon className='input__icon' name={IconNames.Plus} />}
        />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          note='lorem ipsum dolor sit amet concestetur!'
          nodeLeft={<UiIcon className='input__icon' name={IconNames.Plus} />}
          nodeRight={<UiIcon className='input__icon' name={IconNames.Plus} />}
        />
        <UiTextField
          value={input}
          updateValue={setInput}
          label={`label`}
          placeholder={`placeholder`}
          note='lorem ipsum dolor sit amet concestetur!'
          isDisabled={true}
          nodeLeft={<UiIcon className='input__icon' name={IconNames.Plus} />}
          nodeRight={<UiIcon className='input__icon' name={IconNames.Plus} />}
        />
      </div>

      <div className='ui-kit__select-fields'>
        <UiSelect
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
        />
        <UiSelect
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
        />
        <UiSelect
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          errorMessage='error message'
        />
        <UiSelect
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          note='Note message'
        />
        <UiSelect
          value={select}
          updateValue={setSelect}
          valueOptions={SELECT_OPTIONS}
          label={`Label`}
          isDisabled={true}
        />

        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
        />

        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          errorMessage={`error message`}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          errorMessage={`error message`}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          errorMessage={`error message`}
        />

        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          note={`lorem ipsum dolor sit amet`}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          note={`lorem ipsum dolor sit amet`}
          errorMessage={basicSelect}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          note={`lorem ipsum dolor sit amet`}
        />

        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          isDisabled={true}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          label={`Label`}
          isDisabled={true}
        />
        <UiBasicSelectField
          value={basicSelect}
          updateValue={value => setBasicSelect(value as string)}
          valueOptions={BASIC_SELECT_OPTIONS}
          placeholder={`placeholder`}
          isDisabled={true}
        />

        <UiTextarea value={textarea} updateValue={setTextarea} />
        <UiTextarea
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
        />
        <UiTextarea
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          errorMessage='Error message'
        />
        <UiTextarea
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          isDisabled={true}
        />
        <UiTextarea
          value={textarea}
          updateValue={setTextarea}
          label={`Label`}
          errorMessage='Error message'
          isDisabled={true}
        />

        <UiCheckbox value={checkbox} updateValue={setCheckbox} />
        <UiCheckbox
          value={checkbox}
          updateValue={setCheckbox}
          label={`Label`}
        />
        <UiCheckbox
          value={checkbox}
          updateValue={setCheckbox}
          label={`Label`}
          isDisabled={true}
        />

        <UiSwitch value={switchValue} updateValue={setSwitchValue} />
        <UiSwitch
          value={switchValue}
          updateValue={setSwitchValue}
          model={String(switchValue)}
          label='Label'
        />
        <UiSwitch
          value={switchValue}
          updateValue={setSwitchValue}
          model={String(switchValue)}
          isDisabled={true}
        />
      </div>

      <section className='ui-kit__common'>
        <UiErrorMessage message={t('ui-kit.loading-error-msg')} />
        <UiNoDataMessage message={t('ui-kit.no-data-msg')} />
        <UiSpinner />
        <UiSkeleton />
        <UiSkeletonTable rows={5} sizing='1fr 1fr 1fr 1fr 1fr' />
        <div className='ui-kit__collapse-wrp'>
          <UiButton
            className='ui-kit__collapse-btn'
            scheme='flat'
            text={t('ui-kit.collapse-btn')}
            onClick={() => setIsCollapseShown(!isCollapseShown)}
          />
          <UiCollapse isOpen={isCollapseShown}>
            <div className='ui-kit__collapse-body'>
              {t('ui-kit.collapse-text')}
            </div>
          </UiCollapse>
        </div>
        <div className='ui-kit__drawer-wrp'>
          <UiButton
            className='ui-kit__drawer-btn'
            scheme='flat'
            text={t('ui-kit.drawer-btn')}
            onClick={() => setIsDrawerShown(!isDrawerShown)}
          />
          <UiDrawer isShown={isDrawerShown} updateIsShown={setIsDrawerShown}>
            <div className='ui-kit__drawer-body'>
              {t('ui-kit.drawer-text')}

              <UiButton
                className='ui-kit__drawer-close-btn'
                scheme='flat'
                text={t('ui-kit.drawer-close-btn')}
                onClick={() => setIsDrawerShown(false)}
              />
            </div>
          </UiDrawer>
        </div>

        <UiButton
          text={t('ui-kit.modal-btn')}
          onClick={() => setIsModalShown(true)}
        />
        <UiBasicModal
          className='ui-kit__basic-modal'
          isShown={isModalShown}
          updateIsShown={setIsModalShown}
          title={`Modal Title`}
          subtitle={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`}
        >
          <div className='ui-kit__modal-body'>{t('ui-kit.collapse-text')}</div>
        </UiBasicModal>

        <div className='ui-kit__icons'>
          <UiIcon name={IconNames.AcademicCap} />
          <UiIcon name={IconNames.Adjustments} />
          <UiIcon name={IconNames.Annotation} />
          <UiIcon name={IconNames.Archive} />
          <UiIcon name={IconNames.ArrowCircleDown} />
          <UiIcon name={IconNames.ArrowCircleLeft} />
          <UiIcon name={IconNames.ArrowCircleRight} />
          <UiIcon name={IconNames.ArrowCircleUp} />
          <UiIcon name={IconNames.ArrowDown} />
          <UiIcon name={IconNames.ArrowLeft} />
        </div>
      </section>
    </motion.main>
  )
}
