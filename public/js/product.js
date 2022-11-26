const buttonChangeImage = document.querySelector('.image-chosen-btn');
const productImage = document.querySelector('.product-img');

for (let i = 0; i < buttonChangeImage.children.length; i++) {
    buttonChangeImage.children[i].addEventListener('click', function(e){
        productImage.src = this.value;
    });
}