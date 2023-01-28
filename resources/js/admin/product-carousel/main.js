import { DOMSelector } from './constants.js';
import { AJAX } from './ajax.js';
import { SetProduct } from './set-product.js';

const aJAX = new AJAX();
const setProduct = new SetProduct();
let getReqTimer;

const run = (DS, A, SP) => {
    DS.CAROUSEL_FORM.addEventListener('click', function(e){
        if (e.target.matches(DS.SET_ITEM_BUTTONS_CLASS)){
            trySetItem(e.target);
        } else if (e.target.parentElement.matches(DS.SET_ITEM_BUTTONS_CLASS)) {
            trySetItem(e.target.parentElement);
        }
        
        if (e.target.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)){
            tryRemoveItem(e.target);
        } else if (e.target.parentElement.matches(DS.REMOVE_ITEM_BUTTONS_CLASS)) {
           tryRemoveItem(e.target.parentElement);
        }
    });

    DS.CAROUSEL_FORM.addEventListener('input', function(e){
        if (e.target.matches(DS.SHOW_ITEM_TRIGGERERS_CLASS)){
            const elem = e.target;
            const listGroupEl = elem.parentElement.parentElement.lastElementChild.firstElementChild;
            if (elem.value) {
                SP.resultVisibility(listGroupEl, true);
                SP.displayResultOnLoading(listGroupEl);
            } else {
                SP.resultVisibility(listGroupEl, false);
            }
            clearTimeout(getReqTimer);
            getReqTimer = setTimeout(function(){
                A.get(DS.TOKEN, elem.value).then(
                    function(value) {
                        value ? SP.resultVisibility(listGroupEl, true) : SP.resultVisibility(listGroupEl, false);
                        SP.displayResult(listGroupEl, value);
                    },   
                    function(error) {
                        alert(error);
                    }
                );
            }, 300);
        }
    })

    DS.ADD_NEW_BUTTON.addEventListener('click', function(e){
        if (DS.CAROUSEL_FORM.children.length == 2) {
            DS.CAROUSEL_FORM.lastElementChild.matches('.container') ? DS.CAROUSEL_FORM.lastElementChild.remove() : null;
        }
        SP.addNewList(DS.CAROUSEL_FORM);
    });
}

run(DOMSelector, aJAX, setProduct);

function trySetItem(elem){
    const inputTriggererEl = elem.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
    const listGroupEl = elem.parentElement;  
    const inputEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild;
    const floatingEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild;
    const removeEl = elem.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
          
    inputTriggererEl.value = null;
    setProduct.resultVisibility(listGroupEl, false); 
    
    if (inputEl) {
        aJAX.store(DOMSelector.TOKEN, elem.dataset.slug).then(
            function(value) {setProduct.setSuccessMsg(value.name);
                aJAX.destroy(DOMSelector.TOKEN, inputEl.value).then(
                    function() {
                        // Success
                    },
                    function(error) {
                        setProduct.setFailedMsg(error);
                    }
                );
                setProduct.set(inputEl, floatingEl, removeEl, value);
            },   
            function(error) {                
                setProduct.setFailedMsg(error.errMsg);
            }
        );
    } else {
        aJAX.store(DOMSelector.TOKEN, elem.dataset.slug).then(
            function(value) {SP.setSuccessMsg(value.name);
                setProduct.set(inputEl, floatingEl, removeEl, value);
            },   
            function(error) {                
                setProduct.setFailedMsg(error.errMsg);
            }
        );
    }
}

function tryRemoveItem(elem){
    aJAX.destroy(DOMSelector.TOKEN, elem.dataset.slug).then(                
        function(value) {
            const formRowEl = elem.parentElement.parentElement.parentElement.parentElement;
            setProduct.remove(formRowEl);
            if (DOMSelector.CAROUSEL_FORM.children.length == 1) {
                const html = document.createElement('div');
                html.className = 'container border border-2 rounded bg-light';
                html.innerHTML = `
                <div class="row">
                    <div class="col-12 text-center py-3">
                        You haven't added any product to the carousel list
                    </div>
                </div>
                `;
                DOMSelector.CAROUSEL_FORM.append(html);
            }
        },   
        function(error) {
            alert(error);
        }
    );
}