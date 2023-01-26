import { DOMSelector } from './constants.js';
import { AJAX } from './ajax';

const aJAX = new AJAX();

const run = (DS, A) => {
    DS.SEARCH_RESULT.forEach((el) => {
        el.addEventListener('click', function(e){
            A.store(DS.TOKEN.value, el.dataset.slug);
        });
    });
}

run(DOMSelector, aJAX);