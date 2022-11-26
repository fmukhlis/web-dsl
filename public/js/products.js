const buttonExpandFilter = document.querySelectorAll('.expand-filter');
buttonExpandFilter.forEach((el) => {
    el.addEventListener('click', function(e){
        e.preventDefault();
    
        this.classList.toggle('expanded');
        const dropdownSibling = this.nextElementSibling;
        const isCollapse = dropdownSibling.classList.contains('collapse');
        const isShow =  dropdownSibling.classList.contains('show');

        (isCollapse && isShow) ? dropdownSibling.style.transitionDuration = '.3s' : dropdownSibling.style.transitionDuration = '.4s';
        dropdownSibling.classList.toggle('collapse');
        dropdownSibling.classList.toggle('disappearing');
        (isCollapse && isShow) ? dropdownSibling.classList.toggle('show') : null;
        
        setTimeout(() => {
            dropdownSibling.classList.toggle('disappearing');
            dropdownSibling.classList.toggle('collapse');
            !(isCollapse && isShow) ? dropdownSibling.classList.toggle('show') : null;
        }, ((isCollapse && isShow) ? 350 : 50));
    });
});

const buttonShowFilter = document.querySelector('#btn-show-filter');
buttonShowFilter.addEventListener('click', function(){
    const filterContainer = document.querySelector('#filter-container');
    filterContainer.classList.toggle('filter-showed');
    const body = document.querySelector('body');
    body.classList.toggle('mod');
    body.classList.toggle('overflow-hidden');
});
const filterBacklight = document.querySelector('.filter-modal-backlight');
filterBacklight.addEventListener('click', function(){
    buttonShowFilter.click();
});
const buttonClearFilter = document.querySelector('#btn-clear-filter');
buttonClearFilter.addEventListener('click', function(e){
    e.preventDefault();
    const filterContainer = document.querySelector('#filter-container');
    filterContainer.classList.toggle('filter-showed');    
    const body = document.querySelector('body');
    body.classList.toggle('mod');
    body.classList.toggle('overflow-hidden');
});

