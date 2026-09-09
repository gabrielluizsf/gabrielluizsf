import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '../context/LanguageContext'
import Layout from '../components/Layout'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <LanguageProvider>
        <div className='min-h-screen dark:bg-neutral-900'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
