export class HttpClient {
    
    async get(url, params = '') {
        // New URL object.
        let urlObject = new URL(url);

        // Assigning url.search property to URLSearchParams object.
        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject

        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })

        // Return res object as JSON.
        return res.json();
    }
}