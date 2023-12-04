import { MdOutlineDarkMode } from "react-icons/md";
import {Button} from '@/ui'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <nav className='max-w-auto border-b-[1px] border-gray-300 bg-white/[.4] sticky top-0'>
            <div className='max-w-[1440px] mx-auto py-6'>
                <div className='flex justify-between items-center px-8'>
                    <div className="logo w-[20%] text-xl font-medium">Blogs</div>
                    <ul className='flex items-center justify-start'>
                        <li>
                            <Link href={'/'} className='inline-block py-3 px-6 text-[14px] uppercase'>home</Link>
                        </li>
                        <li>
                            <Link href={'/blogs'} className='inline-block py-3 px-6 text-[14px] uppercase'>blogs</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className='inline-block py-3 px-6 text-[14px] uppercase'>about</Link>
                        </li>
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