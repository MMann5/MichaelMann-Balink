import Home from './pages/Home'
import About from './pages/About'

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/city/about/:cityId',
        component: About,
    },
];
