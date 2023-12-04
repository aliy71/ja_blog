interface INavbarData {
    path: string,
    label: string
}

const NavbarData: INavbarData[] = [
    {
        path: '/',
        label: 'home'
    },
    {
        path: '/blogs',
        label: 'blogs'
    },
    {
        path: '/about',
        label: 'about'
    },
]

export default NavbarData