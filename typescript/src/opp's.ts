class chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new chai()

masalaChai.flavour = 'masala'