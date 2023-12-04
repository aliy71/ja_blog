'use client'
import { MdOutlineDarkMode } from "react-icons/md";
import { NavbarData } from '@/constants'
import { Button } from '@/ui'
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarLink from './navbar-link'

type Props = {}

interface INavbarData {
    path: string,
    label: string,
    isHere: boolean
}

const Navbar = (props: Props) => {
    return (
        <>
            <nav className='max-w-auto border-b-[1px] border-gray-300 bg-white/[.4] sticky top-0'>
                <div className='max-w-[1440px] mx-auto pt-4'>
                    <div className='flex justify-between items-center px-8'>
                        <div className="logo w-[20%] text-xl font-medium">Blogs</div>
                        <ul className='flex items-center justify-start'>
                            {
                                NavbarData.map(({ path, label }: INavbarData) => (
                                    <NavbarLink 
                                        label={label} 
                                        path={path}  
                                        />
                                ))
                            }
                        </ul>
                        <div className='w-[20%] flex items-center justify-end'>
                            <Button label={
                                <div>
                                    <MdOutlineDarkMode size={'1.2rem'} />
                                </div>
                            } type='' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar