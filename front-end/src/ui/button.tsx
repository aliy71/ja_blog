import React, { ReactNode } from 'react'

type Props = {
    label: ReactNode | string,
    type: string,
    clickFn?: any
}

const choiseType = (type: string) => {
    switch (type) {
        case 'primary':
            return ''
        case 'secondary': 
            return ''
    }
}

const Button = ({ label, type, clickFn }: Props) => {
    const btnType = choiseType(type)
    return (
        <button onClick={clickFn} className={`flex items-center justify-center gap-2 border p-4 ${btnType}`}>
            <span className=''>{label}</span>
        </button>
    )
}

export default Button