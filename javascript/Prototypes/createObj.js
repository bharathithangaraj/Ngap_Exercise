//Prototypes challenges:1  - Create An Object And Assign Methods To It.

let store ={}
store.product ='Milk'
store.stock = 100 

store.sell = function(limit) {
    console.log(`selling product is  ${this.product} `);
    this.stock -= limit
    console.log(`Remaining store stock is ${this.stock}`);
}

store.buyFromVendor = function(limit) {
    console.log(`${this.product} is buy from vendor`);
    this.stock += limit
    console.log(`Store stock is ${this.stock}`);
}

store.sell(10)
store.buyFromVendor(10)
