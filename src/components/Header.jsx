import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()

    return (
        <div className="header">
            <div className="title">
                <img src="https://www.metaweather.com/static/img/weather/c.svg" alt="sun" />
                <h1>{t('app_title')}</h1>
                <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="cloud" />
            </div>
        </div>
    )
}
