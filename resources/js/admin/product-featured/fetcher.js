export class Fetcher {
    async getData(token, additionalUrl, queryString){
        const response = await fetch(additionalUrl + (queryString ? queryString : ''), {
            method: 'GET',
            mode: 'same-origin',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': token,
            },
        });

        return response.json();
    }
}