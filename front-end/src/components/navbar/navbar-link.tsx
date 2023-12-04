'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
    path: string,
    label: string,
}

const NavbarLink = ({ label, path }: Props) => {
    const pathName = usePathname()

    return (
        <li>
            <Link href={path} className={`inline-block py-4 px-6 text-[14px] uppercase hover:bg-[#222] hover:text-white transition-all ${pathName === path ? 'bg-[#222] text-white' : ''}`}>{label}</Link>
        </li>
    )
}

export default NavbarLink