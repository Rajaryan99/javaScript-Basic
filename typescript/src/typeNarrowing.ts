function getCoffee(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} coffee`
    }

    return `Coffee type: ${kind}`
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return `small cutting chai...`
    }
    if (size === 'medium' || size === 'large') {
        return `make Extera chai`
    }

    return `chai order #${size}`
}


type MasalaChai = { type:  'masala';  spicelevel: number }
type GingerChai = { type:  'ginger';  amount: number }
type ElaichiChai = { type: 'elaichi'; aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {

    switch (order.type) {
        case 'masala':

            return `Masala Chai`
            
            break;
        case "elaichi":

            return `Elachi Chai`
            
            break;
        case 'ginger':

            return `Ginger Chai`
            
            break;
    
       
    }
}