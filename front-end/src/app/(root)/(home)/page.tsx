import { Hero } from '@/components'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='min-h-screen'>
      <div className='max-w-[1440px] mx-auto'>
        <div className="container mx-auto">
          <Hero />
          {/* <Autoplay /> */}
        </div>
      </div>
    </div>
  )
}