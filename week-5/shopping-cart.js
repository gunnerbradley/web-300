export class ShoppingCart {
    constructor ()  {
        this.products = [];
    }
    count() {
        return this.products.length;
    };

    add(product) {
        this.product = this.products.push(product)
    };

    * iterateItems(){
        for (let product of this.products) {
            yield product;
        }
    };
};