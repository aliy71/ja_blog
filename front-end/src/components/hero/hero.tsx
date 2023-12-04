import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex items-center justify-center gap-0 py-[2.4rem]'>
        <div className='w-[40%] p-3 '>
            <h1 className='text-5xl font-bold hero__subtitle_1'>Assalomu alaykum</h1>
            <h3 className='text-2xl font-bold my-2 '><span className='hero__subtitle_1'>JA Blog</span> saytiga xush kelibsiz.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto laudantium recusandae distinctio repellat optio. Corrupti similique voluptatem quo minima nostrum inventore facilis. Inventore, veniam consequuntur. Eaque cupiditate sapiente ullam.</p>
        </div>
        <div className='w-[45%] p-3'>
            <div className='w-[80%] mx-auto'>
                <img src="/images/myLogo.jpg" alt="logo" className='mix-blend-darken' />
            </div>
        </div>
    </div>
  )
}

export default Hero