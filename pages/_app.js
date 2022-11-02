import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      <div className='min-h-screen dark:bg-neutral-900'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default App 
