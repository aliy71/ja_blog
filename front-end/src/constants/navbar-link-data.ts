interface INavbarData {
    path: string,
    label: string,
    isHere: boolean
}

const NavbarData: INavbarData[] = [
    {
        path: '/',
        label: 'home',
        isHere: false
    },
    {
        path: '/blogs',
        label: 'blogs',
        isHere: false
    },
    {
        path: '/about',
        label: 'about',
        isHere: false
    },
]

export default NavbarData