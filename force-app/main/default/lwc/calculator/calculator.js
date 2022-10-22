import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
firstNumber;
secondNumber;
result;

handleFirstChange(event) {
    this.firstNumber = parseInt(event.target.value)
}

handleSecondChange(event) {
    this.secondNumber = parseInt(event.target.value)
}

handleAddNums() {
    this.result = this.firstNumber + this.secondNumber;
    console.log(parseInt(this.result));
}
}