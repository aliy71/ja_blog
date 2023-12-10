import Link from 'next/link'
import React from 'react'

type Props = {
    label: string,
    description?: string,
    image?: string,
    type: string
}

const choiseType = (type: string) => {
    switch (type) {
        case 'col':
            return 'w-[30%] rounded-lg border-gray-600'

        case 'static': 
            return 'w-full my-4  flex gap-4 justify-between items-center even:flex-row-reverse even:bg-black even:text-gray-300'
    }
}

const BlogItem = ({ label, description, image, type}: Props) => {

    const choosedType = choiseType(type)
 
    return (
        <div className={`  hover:shadow ${choosedType} overflow-hidden`}>
            <div className={`${type === 'col' ? 'w-full h-[250px]' : 'w-[51.25%] h-[100px] overflow-hidden'} h-[350px]`}>
                <img src={image} alt={`${label} image`} className='w-full h-full object-cover '/>
            </div>
            <div className={type === 'col' ? 'p-1' : 'w-[50%] pl-2'}>
                <h3 className='text-4xl font-bold mb-2'>
                    <Link href={`/blogs/${label}`} className=''>{label}</Link>
                </h3>
                <p className='text-sm text-black-500'>{description}</p>
            </div>
        </div>
    )
}

export default BlogItem