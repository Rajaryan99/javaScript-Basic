import React, { useState } from 'react'

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}

interface Book {
    name: string;
    price: number;
}


const Button: React.FC<MyButtonProps> = (props) => {
    const { text } = props

    const [value, setValue] = useState<Book>({
        name: "One",
        price: 25,
    })
    return (
        <>
            <h1>Hello World</h1>
            <h2>
                Name: {value.name} of (RS.{value.price})
            </h2>
            <button onClick={() => setValue({ name: 'Two', price: 30 })}>{text}
            
            </button>
        </>
    )
}

export default Button;