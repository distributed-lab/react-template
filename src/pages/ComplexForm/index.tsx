import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { LoginForm } from './components'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

export default function ComplexForm({ className, ...rest }: Props) {
  return (
    <motion.section className={`ui-kit__form ${className}`} {...rest}>
      <LoginForm />
    </motion.section>
  )
}
