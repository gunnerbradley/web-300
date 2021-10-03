export class HttpClient {
    
    async get(url, params = '') {
        let urlObject = new URL(url);

        let paras = new URLSearchParams(params);
        urlObject.search = paras

        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })
        
        return res.json();
    }
}