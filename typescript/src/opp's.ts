// class chai{
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// const masalaChai = new chai("lemon", 20)

// masalaChai.flavour = 'masala'

class chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients
    }
}

const c = new chai()
 