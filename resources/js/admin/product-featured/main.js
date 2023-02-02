import { DOMSelector } from './constants.js';
import { Fetcher } from './fetcher.js';
import { DomManipulator } from './dom-manipulator.js';

const fetcher = new Fetcher();
const domManipulator = new DomManipulator();
let requestTimer;

const run = (DS, F, DM) => {
    if (DS.SUCCESS_MESSAGE) {
        DM.displaySuccessMsgModal(DS.SUCCESS_MESSAGE.dataset.message);
    } else if (DS.ERROR_MESSAGE) {
        DM.displayErrMsgModal(DS.ERROR_MESSAGE.dataset.message);
    }

    DS.TAB.on('hide.bs.tab', function(event){
        const radio = document.querySelector('[name="type['+event.target.dataset.category+']"]');
        const inputs = document.querySelectorAll('[name="product-slug['+event.target.dataset.category+'][]"]');
        if (!radio.value) {
            return event.target.firstElementChild.classList.add('d-none');;
        }
        for (let input of inputs){
            if (!input.value) {
                return event.target.firstElementChild.classList.add('d-none');;
            }
        }
        return event.target.firstElementChild.classList.remove('d-none');
    });

    DS.FEATURED_FORM.addEventListener('mousedown', async function(e){
        if (e.target.matches(DS.SET_ITEM_BUTTONS_CLASS)){
            DM.setProduct(e.target);
        } else if (e.target.parentElement.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
            DM.setProduct(e.target.parentElement);        
        }
        
        if (e.target.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)){
            DM.removeProduct(e.target);
        } else if (e.target.parentElement.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
            DM.removeProduct(e.target.parentElement);
        }
    });

    DS.FEATURED_FORM.addEventListener('input', function(e){
        if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)){
            const elem = e.target;
            const listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
            if (elem.value) {
                DM.resultVisibility(listGroupEl, true);
                DM.displayResultOnLoading(listGroupEl);
            } else {
                DM.resultVisibility(listGroupEl, false);
            }
            clearTimeout(requestTimer);
            requestTimer = setTimeout(function(){
                F.getData(DS.TOKEN, 'featured/async', '?keyword=' + elem.value + '&category=' + elem.dataset.category)
                .then((response) => {
                    DM.displayResult(listGroupEl, response.htmlResult);
                });
            }, 400);
        }
    })

    DS.FEATURED_FORM.addEventListener('focusout', async function(e){
        if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)){
            const elem = e.target;
            const listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
            DM.resultVisibility(listGroupEl, false);
        }
    })
}

run(DOMSelector, fetcher, domManipulator);