export class FilterEvents {
    constructor(containerElement){
        this.filterContainer = containerElement;
    }

    showOrHideFilter(){        
        this.filterContainer.classList.toggle('filter-showed');
        const body = document.querySelector('body');
        body.classList.toggle('mod');
        body.classList.toggle('overflow-hidden');
    }

    expandFilterOption(triggerElement, filterOptionElement){
        triggerElement.classList.toggle('expanded');
        const isCollapse = filterOptionElement.classList.contains('collapse');
        const isShow =  filterOptionElement.classList.contains('show');

        (isCollapse && isShow) ? filterOptionElement.style.transitionDuration = '.3s' : filterOptionElement.style.transitionDuration = '.4s';
        filterOptionElement.classList.toggle('collapse');
        filterOptionElement.classList.toggle('disappearing');
        (isCollapse && isShow) ? filterOptionElement.classList.toggle('show') : null;
        
        setTimeout(() => {
            filterOptionElement.classList.toggle('disappearing');
            filterOptionElement.classList.toggle('collapse');
            !(isCollapse && isShow) ? filterOptionElement.classList.toggle('show') : null;
        }, ((isCollapse && isShow) ? 350 : 50));
    }
}
