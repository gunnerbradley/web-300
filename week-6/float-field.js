export class FloatField {
    constructor(name, field) {
            this.name = name;
            this.field = field;
        }
    
    validate() {
        let checkNaN = parseFloat(this.field);
        
        return !isNaN(checkNaN)
    }
    
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`
    }
}
