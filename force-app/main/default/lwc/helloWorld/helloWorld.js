import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'It is a whole new world!'

    greetingHandleChange(event) {
        this.dynamicGreeting = event.target.value
    }
}