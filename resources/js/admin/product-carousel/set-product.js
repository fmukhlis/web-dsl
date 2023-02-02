import { DOMSelector } from "./constants";
import Swal from 'sweetalert2';

export class SetProduct {
    setSuccessMsg(name){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            padding: '.5em 1em',
            customClass: {
                title: 'mb-0',
            }
        });

        Toast.fire({
            icon: 'success',
            title: 'Product added successfully!',
        });
    }

    setFailedMsg(errorMessage){        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            padding: '.5em 1em',
            customClass: {
                title: 'mb-0',
            }
        });

        Toast.fire({
            icon: 'error',
            title: 'Failed adding product!',
            text: errorMessage,
        });
    }

    displayResult(listGroupElement, productList){
        listGroupElement.innerHTML = productList;
    }

    displayResultOnLoading(listGroupElement){
        listGroupElement.innerHTML = `
        <div class="py-1 px-2 list-group-item list-group-item-action disabled list-group-item-light">
            <div class="px-1 text-center">Loading...</div>
        </div>
        `;
    }

    resultVisibility(listGroupElement, isVisible){
        isVisible ? listGroupElement.parentElement.classList.remove('d-none') : listGroupElement.parentElement.classList.add('d-none');
    }

    addNewList(formElement){
        const inputElements = DOMSelector.CAROUSEL_FORM.children;
        if (inputElements.length > 6) return;

        const html = document.createElement('div');
        html.className = 'form-row align-items-center mb-3';
        html.innerHTML = `
        <div class="col-7 d-flex align-items-center position-relative">
            <div class="input-group">
                <input type="text" class="form-control text-transparent" value="" readonly>
                <div class="input-group-append">
                    <button type="button" class="input-group-text bg-secondary remove-item-button z-1"
                        data-slug="">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="w-100 h-100 position-absolute d-flex align-items-center pl-3">
                --Selected Product--</div>
        </div>
        <div class="col-1 d-flex">
            <div class="rounded bg-light py-1 px-2 mx-auto">
                <i class="fas fa-less-than mr-auto"></i>
                <i class="fas fa-equals ml-auto"></i>
            </div>
        </div>
        <div class="col-4">
            <div class="position-relative">
                <div class="input-group">
                    <input type="text" class="form-control show-item-triggerer"
                        placeholder="Enter product's name..." value="">
                    <div class="input-group-append">
                        <div class="input-group-text bg-purple">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                <div class="position-absolute w-100 h-100 z-5 pr-3 d-none">
                    <div class="list-group pr-4 pl-2 pt-1 rounded-0">
                    </div>
                </div>
            </div>
        </div>
        `;
        formElement.append(html);
    }

    set(inputElement, floatElement, removeElement, productObj) {
        inputElement.value = productObj.slug;
        floatElement.innerHTML = productObj.name;
        removeElement.dataset.slug = productObj.slug;
        removeElement.classList.add('z-1');        
    }

    remove(formRowElement) {
        formRowElement.remove();
    }
}