import React, { useState } from 'react'

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}



const Button: React.FC<MyButtonProps> = (props) => {
    const { text, onClick } = props

    const [value, setValue] = useState<number>(0)
    return (
        <>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>{text}</button>
        </>
    )
}

export default Button;