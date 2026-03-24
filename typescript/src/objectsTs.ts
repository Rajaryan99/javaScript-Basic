const coffee = {
    name: "cold coffee",
    price: 149,
    isHot: false
}

// {
//     name: string;
//     price: number;
//     isHot:boolean
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger",
    price: 190,
    isHot:true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak chai",
    price: 25,
    ingredients:["ginger", "tea leaves"]
}