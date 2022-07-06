import './styles.scss'

import { AppButton } from '@/common'
import { RoutesPaths } from '@/enums'
import { ICON_NAMES } from '@/enums/icon-names.enum'

const ButtonsOverview = () => {
  return (
    <div className='buttons-overview'>
      <div className='buttons-overview__row'>
        <div className='buttons-overview__col'>
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='border-rounded'
            icon-name={ICON_NAMES.gift}
            text="'primary, border-rounded'"
            routePath={RoutesPaths.inputsOverview}
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='border-circle'
            text="'primary, border-circle'"
            href='https://www.youtube.com/'
            target='_blank'
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='icon-first'
            text="'primary, icon-first'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='big'
            text="'primary, big'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='small'
            text="'primary, small'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='success'
            text="'primary, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='error'
            text="'primary, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='warning'
            text="'primary, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='info'
            text="'primary, info'"
          />
        </div>
        <div className='buttons-overview__col'>
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='border-circle success'
            text="'primary, border-circle, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='border-rounded error'
            text="'primary, border-rounded, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='icon-first'
            icon-name={ICON_NAMES.gift}
            text="'primary, icon-first'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='big warning'
            text="'primary, big, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='small info'
            text="'primary, small, info'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='success'
            text="'primary, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='error'
            text="'primary, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='warning'
            text="'primary, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='primary'
            modifications='info'
            text="'primary, info'"
          />
        </div>
      </div>
      <div className='buttons-overview__row'>
        <div className='buttons-overview__col'>
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='border-circle'
            text="'flat, border-circle'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='border-rounded'
            icon-name={ICON_NAMES.gift}
            text="'flat, border-rounded'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='icon-first'
            text="'flat, icon-first'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='big'
            text="'flat, big'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='small'
            text="'flat, small'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='success'
            text="'flat, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='error'
            text="'flat, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='warning'
            text="'flat, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='info'
            text="'flat, info'"
          />
        </div>
        <div className='buttons-overview__col'>
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='border-circle success'
            text="'flat, border-circle, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='border-rounded error'
            text="'flat, border-rounded, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='icon-first'
            icon-name={ICON_NAMES.gift}
            text="'flat, icon-first'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='big warning'
            text="'flat, big, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='small info'
            text="'flat, small, info'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='success'
            text="'flat, success'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='error'
            text="'flat, error'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='warning'
            text="'flat, warning'"
          />
          <AppButton
            className='buttons-overview__button'
            schemes='flat'
            modifications='info'
            text="'flat, info'"
          />
        </div>
      </div>
    </div>
  )
}

export default ButtonsOverview
