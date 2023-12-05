import React from 'react'

type Props = {
    label: string,
    description?: string
}

const Title = ({label, description}: Props) => {
  return (
    <div className='py-8 mt-4'>
        <h3 className='text-2xl font-medium uppercase'>{label}</h3>
        <p className='text-start text-lg font-normal text-gray-500'>{description}</p>
    </div>
  )
}

export default Title