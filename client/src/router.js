import { Home, NotFound, Order, Product } from './pages'

export const router = [
    {
        path: '/',
        page: Home,
        isShowHeader: true
    },
    {
        path: '/order',
        page: Order,
        isShowHeader: true
    },
    {
        path: '/products',
        page: Product,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFound
    }
]