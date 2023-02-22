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

	if (request.method !== "GET") {
		return new Response("ok", {
			status: 200,
			headers: headers,
		});
	}

	let photos = await PHOTOS.get("photos");

	// return a Response object
	return new Response(photos, {
		status: 200,
		headers: headers,
	});
}

// Listen for API calls
addEventListener("fetch", function (event) {
	event.respondWith(handleRequest(event.request));
});
