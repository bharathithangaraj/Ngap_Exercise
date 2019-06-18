//Prototypes challenges:3 - Functional Instantiation with Shared Methods

const StoreWorkFlow = {

    sell(limit) {
        console.log(`selling product is  ${this.product} `);
        this.stock -= limit
        console.log(`Remaining store stock is ${this.stock}`);
    },

    buyFromVendor(limit) {
        console.log(`${this.product} is buy from vendor`);
        this.stock += limit
        console.log(`Store stock is ${this.stock}`);
    }

}

function Store(product, limit) {
    let store = Object.create(StoreWorkFlow)
    store.product = product
    store.stock = limit

    return store;
}

const milk = Store('Milk',40 )
const rice = Store('Rice',44 )

milk.sell(10)
milk.buyFromVendor(88)