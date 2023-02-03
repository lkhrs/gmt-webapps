/**
 * Fetch photos from the API
 */
const getPhotos = () => {
	fetch("https://vanillajsacademy.com/api/photos.json")
		.then((response) => {
			if (response.ok) {
				return response;
			}
			return Promise.reject(Error("error"));
		})
		.catch((error) => {
			return Promise.reject(Error(error.message));
		});
};

export { getPhotos };
