/**
 * Fetch photos from the API
 */
async function getPhotos() {
	try {
		let response = await fetch("https://vanillajsacademy.com/api/photos.json");
		if (!response.ok) throw response;
		let photos = await response.json();
		return photos;
	} catch (error) {
		console.warn(error);
		return [];
	}
}

export { getPhotos };
