// Hold the cart
let cart = JSON.parse(localStorage.getItem('cart')) || {};

/**
 * Add a photo to cart
 * @param {String} id Photo ID
 */
function addToCart (id) {
	cart[id] = true;
	localStorage.setItem('cart', JSON.stringify(cart));
}

/** 
 * Check if item is in cart
 * @param {String} id Photo ID
 * @return {Boolean} If true, item in cart
 */
function inCart (id) {
	return cart[id];
}

export {addToCart, inCart}