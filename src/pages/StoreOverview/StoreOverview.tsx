import './styles.scss'

import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorMessage, Loader, NoDataMessage } from '@/common'
import { ErrorHandler, sleep } from '@/helpers'
import { getPosts, useAppDispatch, useAppSelector } from '@/store'

const StoreOverview = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoadFailed, setIsLoadFailed] = useState(false)
  const posts = useAppSelector(state => state.postsSlice.posts)

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
    <div className='store-overview'>
      {isLoaded ? (
        isLoadFailed ? (
          <ErrorMessage message={t('store-overview.loading-error-msg')} />
        ) : posts.length ? (
          <div className='store-overview__list'>
            {posts.map(el => (
              <div className='store-overview__card' key={el.id}>
                <span className='store-overview__card-title'>{el.title}</span>
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
    </div>
  )
}

export default StoreOverview
