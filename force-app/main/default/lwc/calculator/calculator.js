import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
@track currentResult;
@track previousResult = [];
@track showPreviousResults = false;
firstNumber;
secondNumber;

numberChangeHandler(event) {
    const inputBox = event.target.name;
    if(inputBox === 'firstNumber') {
        this.firstNumber = event.target.value;
    } else if (inputBox === 'secondNumber') {
        this.secondNumber = event.target.value;
    }
}

addHandler() {
    const firstNumero = parseInt(this.firstNumber);
    const secondNumero = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstNumero} + ${secondNumero} is ${firstNumero + secondNumero}`
    this.previousResult.push(this.currentResult)
}

subHandler() {
    const firstNumero = parseInt(this.firstNumber);
    const secondNumero = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstNumero} - ${secondNumero} is ${firstNumero - secondNumero}`
    this.previousResult.push(this.currentResult)
}

multiplyHandler() {
    const firstNumero = parseInt(this.firstNumber);
    const secondNumero = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstNumero} x ${secondNumero} is ${firstNumero * secondNumero}`
    this.previousResult.push(this.currentResult)
}

divideHandler() {
    const firstNumero = parseInt(this.firstNumber);
    const secondNumero = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstNumero} / ${secondNumero} is ${firstNumero / secondNumero}`
    this.previousResult.push(this.currentResult)
}

previousResultsToggle(event) {
   this.showPreviousResults = event.target.checked;
}
}