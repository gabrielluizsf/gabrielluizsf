import Head from 'next/head'
import Terminal from '../components/Terminal'
import { useTranslation } from '../context/LanguageContext'

function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.meta.homeTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Terminal />
    </>
  )
}

export default HomePage;
