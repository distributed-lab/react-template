import './styles.scss'

import { FC, useCallback } from 'react'

import { AppButton } from '@/common'
import { ICON_NAMES, RoutesPaths } from '@/enums'
import { Bus } from '@/helpers'

const UiKit: FC = () => {
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
    <>
      <section className='ui-kit-page__buttons'>
        <AppButton
          iconRight={ICON_NAMES.gift}
          text='router, border-rounded, icon'
          routePath={RoutesPaths.uiKit}
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
    </>
  )
}

export default UiKit
