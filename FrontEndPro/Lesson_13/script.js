function Hamburger(size) {
    this.price = size.price,
    this.callories = size.callories
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
}

Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5,
}

Hamburger.TOPPING_POTATOES = {
    price: 15,
    callories: 10,
}

Hamburger.TOPPING_SPICES = {
    price: 15,
    callories: 0,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}

Hamburger.prototype.addTopping = function(topping) {
    this.price += topping.price
    this.callories += topping.callories
}

Hamburger.prototype.receiveOrder = function() {
    console.log(`here it is you hamburger with price ${this.price}$ and ${this.callories} callories`)
}