function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("coffee", 2)

function getChaiPeice(): number{
    return 25
}

function orderChai(type?: string) {
    console.log("Your chai is ready.")
}


function makeCoffee(order: {
    type: string;
    sugar: number;
    size: 'small' | 'large'

}): number{
    return 4
}