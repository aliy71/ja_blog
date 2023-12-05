import { Hero, Spronsors, Title } from '@/components'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='min-h-[200vh]'>
      <div className='max-w-[1440px] mx-auto'>
        <div className="container mx-auto">
          <Hero />
          <Spronsors />
          <Title label='blogs' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit impedit necessitatibus sunt cupiditate assumenda soluta possimus officiis aliquam quo dolores.' />
          {/* <Autoplay /> */}
        </div>
      </div>
    </div>
  )
}