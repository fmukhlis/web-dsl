import { DOMSelector } from "./constants";

export class AJAX {
    get(token, productKeyword){
        return new Promise(function(resolve, reject){
            const httpRequest = new XMLHttpRequest();
    
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        resolve(JSON.parse(httpRequest.responseText));
                    } else {
                        reject('Rejected');
                    }
                } 
            };
    
            httpRequest.open('GET', 'carousel/AJAX?keyword=' + productKeyword , true);
    
            // Send the proper header information along with the request
            httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
            
            httpRequest.send();
        }); 
    }

    store(token, slug){
        return new Promise(function(resolve, reject){
            const httpRequest = new XMLHttpRequest();
    
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        resolve(JSON.parse(httpRequest.responseText));
                    } else {
                        reject(JSON.parse(httpRequest.responseText));
                    }
                } 
            };
    
            httpRequest.open('POST', 'carousel/AJAX/' + slug, true);
    
            // Send the proper header information along with the request
            httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
            
            httpRequest.send();
        });
    }

    destroy(token, slug = null){
        return new Promise(function(resolve, reject){
            const httpRequest = new XMLHttpRequest();
    
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        resolve(JSON.parse(httpRequest.responseText));
                      } else {
                        reject(JSON.parse(httpRequest.responseText));
                      }
                } 
            };
    
            httpRequest.open('DELETE', 'carousel/AJAX/' + slug, true);
    
            // Send the proper header information along with the request
            httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
            
            httpRequest.send();
        });
    }
}