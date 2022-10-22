import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
firstNumber;
calculating = false;
secondNumber;
operator;
result;

handleFirstChange(event) {
    this.firstNumber = parseInt(event.target.value)
}

handleSecondChange(event) {
    this.secondNumber = parseInt(event.target.value)
}

handleAddNums() {
    this.operator = '+';
    this.calculating = true;
    this.result = this.firstNumber + this.secondNumber;
}

handleSubtractNums() {
    this.operator = '-';
    this.calculating = true;
    this.result = this.firstNumber - this.secondNumber;
}

handleMultiplyNums() {
    this.operator = '*';
    this.calculating = true;
    this.result = this.firstNumber * this.secondNumber;
}

handleDivideNums() {
    this.operator = '/';
    this.calculating = true;
    this.result = this.firstNumber / this.secondNumber;
}
}