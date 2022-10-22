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
    console.log('Add: ', parseInt(this.result));
}

handleSubtractNums() {
    this.result = this.firstNumber - this.secondNumber;
    console.log('Subtract: ', parseInt(this.result));
}

handleMultiplyNums() {
    this.result = this.firstNumber * this.secondNumber;
    console.log('Multiply: ', parseInt(this.result));
}

handleDivideNums() {
    this.result = this.firstNumber / this.secondNumber;
    console.log('Divide: ', parseInt(this.result));
}
}