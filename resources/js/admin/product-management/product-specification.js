import { DOMSelector } from "./constants";

export class ProductSpecification {
    appendSpecificationInput(){
        const div = document.createElement('div');
        div.className = 'form-row';
        const html = `
        <div class="col-md-3 my-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-purple"><i class="fa fa-key"></i></span>
                </div>
                <input type="text"
                    class="form-control spec"
                    name="spec_key[]" placeholder="Kata Kunci">
            </div>
        </div>
        <div class="col-md-8 my-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-purple"><i class="fa fa-file"></i></span>
                </div>
                <input type="text"
                    class="form-control spec"
                    name="spec_val[]" placeholder="Nilai">
            </div>
        </div>        
        <div class="col-md-1 my-2 d-flex">
            <a href="javascript:void(0)" data-controll="remove-spec"
                class="btn btn-danger d-flex align-items-center ml-auto"
                data-toggle="tooltip" data-placement="left" title="Remove">
                <i class="fa fa-times"></i>
            </a>
        </div>
        `;

        DOMSelector.PRODUCT_SPECIFICATION_ELEMENT.append(div);
        DOMSelector.PRODUCT_SPECIFICATION_ELEMENT.lastElementChild.innerHTML = html;
        $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
    }
}