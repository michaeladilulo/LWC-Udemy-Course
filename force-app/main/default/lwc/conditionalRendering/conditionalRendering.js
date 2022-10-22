import { LightningElement, track} from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track dataDisplay = false;

        handleDataDisplay(event) {
            this.dataDisplay = event.target.checked;
        }
}