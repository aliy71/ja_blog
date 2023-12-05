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
            return ''
    
        case 'row':
            return ''
    
        default:
            break;
    }
}

const BlogItem = ({ label, description, image }: Props) => {



    return (
        <div className='border rounded-lg border-gray-600 hover:shadow'>
            <div>
                <img src={image} alt={`${label} image`} />
            </div>
            <div>
                <h3>{label}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogItem