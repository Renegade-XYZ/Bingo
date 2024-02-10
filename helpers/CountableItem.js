export class CountableItem {

    item = null;
    requiredAmount = -1;

    constructor(item, requiredAmount = 1) {
        this.item = item;
        this.requiredAmount = requiredAmount;
    }
}