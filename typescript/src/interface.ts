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


//intersection

type BaseChai = { teaLeaves: number }
type Extra = { masala: number }

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeaves: 2,
    masala:1
}