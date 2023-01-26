export class TotalPriceCalculation {
    getTotalPrice(price = 0, discount = 0){
        price = this.cleanValue(price);
        return price - (price * discount / 100);
    }
    
    cleanValue(value){
        return value ? value.replace(/[^0-9]/g, '') : 0;
    }
}

