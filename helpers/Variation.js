export class Variation {

    maxPoints = 0;
    countableItems = [];

    constructor(...countableItems) {
        this.countableItems = countableItems;
        for (const {item, requiredAmount} of countableItems) {
            this.maxPoints += requiredAmount;
        }
    }
}

export class CappedVariation extends Variation {

    constructor(maxPoints, ...countableItems) {
        super(...countableItems);
        super.maxPoints = maxPoints;
        for (const countableItem of countableItems) {
             countableItem.requiredAmount = NaN;
        }
    }
}