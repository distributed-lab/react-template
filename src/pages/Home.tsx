import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className='home'>
      <h1>{t('home.title')}</h1>
    </div>
  )
}

export default Home
