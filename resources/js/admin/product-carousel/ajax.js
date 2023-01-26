import { DOMSelector } from "./constants";

export class AJAX {
    store(token, slug){
        const httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                console.log(token);
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                  } else {
                    alert("There was a problem with the request.");
                  }
            } 
        };

        httpRequest.open('POST', 'carousel/AJAX/' + slug, true);

        // Send the proper header information along with the request
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
        
        httpRequest.send();
    }

    destroy(token, slug){
        const httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                console.log(token);
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                  } else {
                    alert("There was a problem with the request.");
                  }
            } 
        };

        httpRequest.open('DELETE', 'carousel/AJAX/' + slug, true);

        // Send the proper header information along with the request
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.setRequestHeader('X-CSRF-TOKEN', token);
        
        httpRequest.send();
    }
}