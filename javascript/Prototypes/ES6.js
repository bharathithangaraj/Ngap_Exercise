//Prototypes challenges:5 - ES6 class
class Store {
    constructor(product, stock) {
        this.product = product
        this.stock = stock
    }

    sell(limit) {
        console.log(`selling product is  ${this.product} `);
        this.stock -= limit
        console.log(`Remaining store stock is ${this.stock}`);
    }

    buyFromVendor(limit) {
        console.log(`${this.product} is buy from vendor`);
        this.stock += limit
        console.log(`Store stock is ${this.stock}`);
    }
}

function nextToSell (products) {
    const sortedByLeastEnergy = products.sort((a,b) => {
      return a.stock - b.stock
    })
  
    return sortedByLeastEnergy[0].product
}

const milk = new Store('Milk',40 )
const rice = new Store('Rice',44 )

console.log(nextToSell([milk, rice])) 