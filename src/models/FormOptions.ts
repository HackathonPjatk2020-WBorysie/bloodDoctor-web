export default class FormOptions {

    ifMorfology: boolean;
    ifBiochemy: boolean;
    ifImmunology: boolean;

    constructor(ifMorfology: boolean, ifBiochemy: boolean, ifImmunology: boolean) {
        this.ifMorfology = ifMorfology;
        this.ifBiochemy = ifBiochemy;
        this.ifImmunology = ifImmunology;
    }
}
