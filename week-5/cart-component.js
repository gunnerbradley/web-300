export class CartComponent extends HTMLElement{
   constructor () {
       super();
   }
    connectedCallback() {
        return this.innerHTML = `<p class="pars"><i id="cartIcon" class="fas fa-shopping-cart card-title"></i> (<span id="cart-count" class="cart-num"></span>) </p>`;
    }
}
   
window.customElements.define("cart-component", CartComponent);