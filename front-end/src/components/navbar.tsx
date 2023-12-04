import { MdOutlineDarkMode } from "react-icons/md";
import {Button} from '@/ui'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='max-w-auto'>
        <div className='max-w-[1440px] mx-auto py-6'>
            <div className='flex justify-between items-center px-8'>
                <div className="logo w-[20%]">Blogs</div>
                <ul className='flex items-center justify-start gap-4'>
                    <li>
                        <Link href={'/'} className='uppercase'>home</Link>
                    </li>
                    <li>
                        <Link href={'/blogs'} className='uppercase'>blogs</Link>
                    </li>
                </ul>
                <div className='w-[20%] flex items-center justify-between'>
                    <Button label={
                        <div>
                            <MdOutlineDarkMode />
                        </div>
                    } type='' />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar