import { TotalPriceCalculation } from './total-price-calculation.js';
import { DOMSelector } from './constants.js';
import './dropzone-customization.js';
import { changeDzMODE } from './dropzone-customization.js';
import { ProductSpecification } from './product-specification.js';

const totalPriceCalculation = new TotalPriceCalculation();
const productSpecification = new ProductSpecification();

const run = (DS, TPC) => {
    let price = TPC.cleanValue(DS.PRICE_ELEMENT.value);
    let discount = TPC.cleanValue(DS.DISCOUNT_ELEMENT.value);
    DS.PRICE_ELEMENT.value = price;
    DS.COST_ELEMENT.value = TPC.cleanValue(DS.COST_ELEMENT.value);
    DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);

    DS.PRICE_ELEMENT.addEventListener('keyup', function(){
        price = TPC.cleanValue(this.value);
        DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);
    });
    
    DS.DISCOUNT_ELEMENT.addEventListener('keyup', function(){
        discount = TPC.cleanValue(this.value);
        DS.TOTAL_PRICE_ELEMENT.value = TPC.getTotalPrice(price, discount);
    });

    DS.ADD_SPECIFICATION_ELEMENT.addEventListener('click', function(){
        productSpecification.appendSpecificationInput();
    });

    DS.PRODUCT_SPECIFICATION_ELEMENT.addEventListener('click', function(e){
        if (e.target.dataset.controll == 'remove-spec'){
            $('[data-toggle="tooltip"]').tooltip('hide');
            e.target.parentElement.parentElement.remove();
        } else if (e.target.parentElement.dataset.controll == 'remove-spec'){
            $('[data-toggle="tooltip"]').tooltip('hide');
            e.target.parentElement.parentElement.parentElement.remove();
        }
    });    

    if (DS.CHANGE_PHOTO_ELEMENT && DS.CANCEL_CHANGE_PHOTO_ELEMENT){
        DS.CHANGE_PHOTO_ELEMENT.addEventListener('click', function(){
            changeDzMODE(this, 'change_mode');
        });
        
        DS.CANCEL_CHANGE_PHOTO_ELEMENT.addEventListener('click', function(){
            changeDzMODE(this, 'view_mode');
        });
    }
}

run(DOMSelector, totalPriceCalculation);