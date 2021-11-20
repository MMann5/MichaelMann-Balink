import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '../services/weather-services'

export default function Footer() {
    const { t } = useTranslation()
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en')
    const currentLanguage = languages.find((l) => l.code === language)

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [language, currentLanguage.dir])

    const handleLang = (ev) => {
        localStorage.setItem('lang', ev.target.value)
        setLanguage(ev.target.value)
        window.location.reload()
    }

    return (
        <div className="footer">
            <div><p><span>&copy; {t('footer')}</span></p></div>
            <div className="language-option">
                <select
                    value={language}
                    onChange={handleLang}>
                    {languages.map((l, idx) => (
                        <option key={idx} value={l.code} disabled={l.code === language} >{l.name}</option>
                    ))}
                </select>
            </div>
        </div >
    )
}
