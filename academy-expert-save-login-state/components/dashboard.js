import { getToken, removeToken } from "./token.js";
import {dashboardURL} from "./endpoints.js";

/**
 * Get the photos from the API
 */
async function getPhotos() {
	let response = await fetch(`${dashboardURL}?token=${getToken()}`);

	// If not logged in, redirect to login
	if (response.status === 401) {
		removeToken();
		window.location.href = "login.html";
	}

	// Otherwise, get the photos
	return await response.json();
}

export { getPhotos };