import './styles.scss'

import { motion, MotionProps } from 'framer-motion'
import { FC, HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorMessage, Loader, NoDataMessage } from '@/common'
import { ErrorHandler, sleep } from '@/helpers'
import { getPosts, useAppDispatch, useAppSelector } from '@/store'
import { Post } from '@/types'

type Props = HTMLAttributes<HTMLDivElement> & MotionProps

const StoreOverview: FC<Props> = ({ ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoadFailed, setIsLoadFailed] = useState(false)
  const posts: Post[] = useAppSelector(state => state.postsSlice.posts)

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const init = useCallback(async () => {
    try {
      await sleep(1000)
      await dispatch(getPosts())
    } catch (error) {
      ErrorHandler.processWithoutFeedback(error)
      setIsLoadFailed(true)
    }
    setIsLoaded(true)
  }, [dispatch])

  useEffect(() => {
    init()
  }, [init])

  return (
    <motion.div className='store-overview' {...rest}>
      {isLoaded ? (
        isLoadFailed ? (
          <ErrorMessage message={t('store-overview.loading-error-msg')} />
        ) : posts.length ? (
          <div className='store-overview__list'>
            {posts.map((el, idx) => (
              <div className='store-overview__card' key={el.id}>
                <span className='store-overview__card-title'>
                  {`${idx + 1}. ${el.title}`}
                </span>
                <p className='store-overview__card-body'>{el.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <NoDataMessage message={t('store-overview.no-data-msg')} />
        )
      ) : (
        <Loader />
      )}
    </motion.div>
  )
}

export default StoreOverview
