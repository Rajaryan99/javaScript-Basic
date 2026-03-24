type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: chaiOrder) {
    console.log(order)
}
function serveChai(order: chaiOrder) {
    console.log(order)
}

interface cupsize {
    size: 'small' | 'large'
}
