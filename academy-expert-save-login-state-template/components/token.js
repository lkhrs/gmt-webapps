/**
 * Save a token to local storage
 * @param {string} token
 */
export const saveToken = (token) => {
	localStorage.setItem("token", token);
};

/**
 * Get a token from local storage
 * @returns {string}
 */
export const getToken = () => {
	return localStorage.getItem("token");
};

/**
 * Remove a token from local storage
 */
export const removeToken = () => {
	localStorage.removeItem("token");
};
