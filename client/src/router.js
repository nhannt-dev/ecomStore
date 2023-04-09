import { Home, NotFound, Order, Product, TypeProduct, ProductDetail, SignIn, SignUp } from './pages'

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
        path: '/type',
        page: TypeProduct,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignIn,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUp,
        isShowHeader: false
    },
    {
        path: '/product-detail',
        page: ProductDetail,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFound
    }
]