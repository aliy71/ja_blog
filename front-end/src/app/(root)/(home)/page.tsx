import { BlogItem, Hero, Title } from '@/components'
import { BlogData } from '@/constants'
import React from 'react'

interface IMedia {
  src: string,
  alt: string
}
interface IBlogData {
  label: string,
  description: string,
  image: IMedia
}

export default function Home() {
  return (
    <div className='w-auto'>
      <div className='max-w-[1440px] mx-auto'>
        <Hero />
        <div className="container mx-auto">
          <Title label='blogs' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit impedit necessitatibus sunt cupiditate assumenda soluta possimus officiis aliquam quo dolores.' />
          <div className='w-full py-4'>
            {
              BlogData.map(({ label, description, image }: IBlogData) => {
                return <BlogItem label={label} description={description} image={image.src} type={'static'} key={label} />
              })
            }
          </div>
          {/* <Autoplay /> */}
        </div>
        <div className='container mx-auto'>
          <Title label='About' />
          
        </div>
      </div>
    </div>
  )
}