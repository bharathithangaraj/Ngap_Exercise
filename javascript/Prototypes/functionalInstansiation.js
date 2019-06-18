//Prototypes challenges:2  - Functional Instantiation.
function Store (product, stock) {
    let store = {}
    store.product = product
    store.stock = stock
  
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
  
    return store
  }
  
  const milk = Store('Milk', 44)
  const rice = Store('Rice', 66)

  milk.sell(10)
  milk.buyFromVendor(2)