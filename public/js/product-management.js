// Product Management

// Filtering Price and Discount Value for Calculating
const totalPriceElement = document.querySelector('#total');
const priceElement = document.querySelector('#price');
const discountElement = document.querySelector('#discount');

let price = priceElement.value ? priceElement.value.replace(/[^0-9]/g, '') : 0;
let discount = discountElement.value ? discountElement.value.replace(/[^0-9]/g, '') : 0;

totalPriceElement.value = getTotalPrice(price, discount);

priceElement.addEventListener('keyup', function(e){
    price = this.value.replace(/[^0-9]/g, '');
    if(price){
        totalPriceElement.value = getTotalPrice(price, discount);
    } else {
        totalPriceElement.value = getTotalPrice(0, discount);
    }
});
discountElement.addEventListener('keyup', function(e){
    discount = this.value.replace(/[^0-9]/g, '');
    if(discount){
        totalPriceElement.value = getTotalPrice(price, discount);
    } else {
        totalPriceElement.value = getTotalPrice(price, 0);
    }
});
function getTotalPrice(price = 0, discount = 0){
    return price - (price * discount / 100);
}

// Change Product's Gallery Mode (View or Edit)
const changePhotoElement = document.querySelector('#change-product-photo');
const cancelChangePhotoElement = document.querySelector('#cancel-change-product-photo');

if (changePhotoElement) 
    changePhotoElement.addEventListener('click', function(e){
        const sectionContainer = this.parentElement.parentElement;
        sectionContainer.classList.add('d-none');
        sectionContainer.previousElementSibling.classList.remove('d-none');
    });

if (cancelChangePhotoElement) 
cancelChangePhotoElement.addEventListener('click', function(e){
        const sectionContainer = this.parentElement.parentElement;
        sectionContainer.classList.add('d-none');
        sectionContainer.nextElementSibling.classList.remove('d-none');
    });
