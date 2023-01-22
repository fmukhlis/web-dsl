import { DOMSelector } from "./constants.js";
import { FilterEvents } from "./filter-events.js";

const filterEvents = new FilterEvents(DOMSelector.FILTER_CONTAINER);

const run = (DS, FE) => {
    DS.BUTTON_EXPAND_FILTER.forEach((el)=>{
        el.addEventListener('click', function(e){
            
            console.log('BEF Work');
            e.preventDefault();
            FE.expandFilterOption(this, this.nextElementSibling);
        });
    });

    DS.BUTTON_SHOW_FILTER.addEventListener('click', () => {
        console.log('BSF Work');
        FE.showOrHideFilter();
    });

    DS.FILTER_BACK_DARK.addEventListener('click', () => {
        console.log('FBD Work');
        DS.BUTTON_SHOW_FILTER.click();
    });
}

run(DOMSelector, filterEvents);
