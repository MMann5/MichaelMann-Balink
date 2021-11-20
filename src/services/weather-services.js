export const getDate = (date) => {
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    if (day === new Date().getDate()) return 'TODAY'
    if (day === new Date().getDate() + 1) return 'TOMORROW'
    return `${day}/${month}`
}

export const getHour = (hours) => {
    return hours.substring(11, 16)
}

export function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

export function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

export function windDirection(direction) {
    switch (direction) {
        case 'N': return '↑'
        case 'E': return '→'
        case 'S': return '↓'
        case 'W': return '←'

        case 'NNE':
        case 'NE':
        case 'ENE':
            return '↗'

        case 'NNW':
        case 'NW':
        case 'WNW':
            return '↖'

        case 'ESE':
        case 'SE':
        case 'SSE':
            return '↘'

        case 'WSW':
        case 'SW':
        case 'SSW':
            return '↙'
        default: return 'Inconnue'
    }
}

export const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'he',
        name: 'עברית',
        dir: 'rtl',
        country_code: 'il',
    },
]

export const europe = [
    { name: 'Marseille', value: '610264' },
    { name: 'Barcelone', value: '753692' },
    { name: 'Rome', value: '721943' },
]

export const asia = [
    { name: 'Beijing', value: '2151330' },
    { name: 'Tokyo', value: '1118370' },
    { name: 'Dubai', value: '1940345' },
]

export const america = [
    { name: 'New York', value: '2459115' },
    { name: 'Los Angeles', value: '2442047' },
    { name: 'Buenos Aires', value: '468739' },
]