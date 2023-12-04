import Link from 'next/link'
import React from 'react'

type Props = {
    path: string,
    label: string
}

const NavbarLink = ({ label, path }: Props) => {
    return (
        <ul className='flex items-center justify-start'>
            <li>
                <Link href={path} className='inline-block py-4 px-6 text-[14px] uppercase hover:bg-[#222] hover:text-white transition-all'>{label}</Link>
            </li>
        </ul>
    )
}

export default NavbarLink