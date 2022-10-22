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
    console.log('Add: ', parseInt(this.result));
}

handleSubtractNums() {
    this.operator = '-';
    this.calculating = true;
    this.result = this.firstNumber - this.secondNumber;
    console.log('Subtract: ', parseInt(this.result));
}

handleMultiplyNums() {
    this.operator = '*';
    this.calculating = true;
    this.result = this.firstNumber * this.secondNumber;
    console.log('Multiply: ', parseInt(this.result));
}

handleDivideNums() {
    this.operator = '/';
    this.calculating = true;
    this.result = this.firstNumber / this.secondNumber;
    console.log('Divide: ', parseInt(this.result));
}
}