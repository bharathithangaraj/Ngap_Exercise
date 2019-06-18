//Prototypes challenges:4 - PrototypeInstantiation

function Store(product,stock){
    let store = Object.create(Store.prototype)
    store.product = product
    store.stock = stock

    return store;
}

Store.prototype.sell = function(limit) {
    console.log(`selling product is  ${this.product} `);
    this.stock -= limit
    console.log(`Remaining store stock is ${this.stock}`);
}

Store.prototype.buyFromVendor = function(limit) {

    console.log(`${this.product} is buy from vendor`);
    this.stock += limit
    console.log(`Store stock is ${this.stock}`);

}

const milk = Store('Milk',40 )
const rice = Store('Rice',44 )

milk.sell(10)
milk.buyFromVendor(88)