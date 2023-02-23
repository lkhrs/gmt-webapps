/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	let headers = new Headers({
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, OPTIONS, HEAD",
		"Access-Control-Allow-Headers": "*",
	});

	let allowed = ["http://localhost:3000", "https://lkhrs.github.io"];

	// If domain is not allowed, return error code
	if (!allowed.includes(request.headers.get("origin"))) {
		return new Response("Not allowed", {
			status: 403,
			headers: headers,
		});
	}

	// If not a GET request, return generic response
	if (request.method !== "GET") {
		return new Response("ok", {
			status: 200,
			headers: headers,
		});
	}

	// Get photos from the database
	let photos = await PHOTOS.get("photos");

	// Otherwise, return photos
	return new Response(photos, {
		status: 200,
		headers: headers,
	});
}

// Listen for API calls
addEventListener("fetch", function (event) {
	event.respondWith(handleRequest(event.request));
});
