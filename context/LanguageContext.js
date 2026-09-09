import { createContext, useContext, useState, useEffect } from 'react'
import pt from '../locales/pt'
import en from '../locales/en'

const translations = { pt, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage || 'pt'
    const detected = browserLang.startsWith('en') ? 'en' : 'pt'
    setLang(detected)
    document.documentElement.lang = detected
  }, [])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
