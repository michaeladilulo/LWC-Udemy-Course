import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
@track currentResult;
firstNumber;
secondNumber;

numberChangeHandler(event) {
    const inputBox = event.target.name;
    if(inputBox.name === 'firstNumber') {
        this.firstNumber = event.target.value;
    } else if (inputBox.name === 'secondNumber') {
        this.secondNumber = event.target.value;
    }
}

addHandler() {
    const firstNumero = parseInt(this.firstNumber);
    const secondNumero = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstNumero} + ${secondNumero} is ${firstNumero + secondNumero}`
}

subHandler() {

}

multiplyHandler() {

}

divideHandler() {

}
}