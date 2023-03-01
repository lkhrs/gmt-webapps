import {
	store,
	component,
} from "https://cdn.jsdelivr.net/npm/reefjs@12/dist/reef.es.min.js";

// Hold cart data
let cart = store(JSON.parse(localStorage.getItem("cart")) || {});

/**
 * Add a photo to the cart
 * @param {String} id The photo ID
 */
function addToCart(id) {
	cart[id] = true;
	localStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * Remove a photo from the cart
 * @param  {String} id The photo ID
 */
function removeFromCart(id) {
	delete cart[id];
	localStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * Empty cart
 */
function emptyCart() {
	for (let key in cart) {
		delete cart[key];
	}
	localStorage.removeItem("cart");
}

/**
 * Check if an item is in the cart
 * @param  {String}  id The photo ID
 * @return {Boolean}    If true, the item is in the cart
 */
function inCart(id) {
	return cart[id];
}

/**
 * Get the cart count HTML
 * @return {String} The cart count HTML string
 */
function cartCountHTML() {
	return `(${Object.keys(cart).length})`;
}

/**
 * Get data for just photos that are in the cart
 * @param  {Array} photos All photos
 * @return {Array}        Photos in the cart
 */
function getPhotosInCart(photos) {
	return photos.filter(function (photo) {
		return inCart(photo.id);
	});
}

/**
 * Get cart items from the URI
 * @return {Object} The cart items
 */
function getCartItemsFromURI() {
	let items = new URL(window.location.href).searchParams.get("cart");
	if (!items) return;
	return items.split(",");
}

/**
 * Resurrect the cart
 */
function resurrectCart() {
	let cartItemsURI = getCartItemsFromURI();
	if (!cartItemsURI) return;

	// Purge existing items
	emptyCart();

	// Load items from URI
	for (let id of cartItemsURI) {
		cart[id] = true;
	}

	// Save to local storage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Update URL
	let url = new URL(window.location.href);
	url.searchParams.delete("cart");
	history.replaceState(history.state, "", url);
}

function getPhotosFromURI(photos) {
	let cart = getCartFromURL;
	if (!cart) return;
	return photos.filter(function (photo) {
		return cart.includes(photo.id);
	});
}

// Create cart count component
component("#cart-count", cartCountHTML);

export {
	addToCart,
	removeFromCart,
	emptyCart,
	inCart,
	getPhotosInCart,
	getCartItemsFromURI,
	resurrectCart,
	getPhotosFromURI,
};
