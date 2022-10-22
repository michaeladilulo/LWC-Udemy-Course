import { LightningElement, track} from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track dataDisplay = false;

    @track cityList = ['Meridian', 'Boise', 'Nampa', 'Caldwell']

        handleDataDisplay(event) {
            this.dataDisplay = event.target.checked;
        }
}