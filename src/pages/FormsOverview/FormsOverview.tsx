import './styles.scss'

import { FC, HTMLAttributes } from 'react'

import LoginForm from '@/forms/LoginForm'

type Props = HTMLAttributes<HTMLDivElement>

const FormsOverview: FC<Props> = () => {
  return (
    <div className='forms-overview'>
      <div className='forms-overview__row'>
        <div className='forms-overview__col'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default FormsOverview
