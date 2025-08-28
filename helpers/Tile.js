export class Tile {

    name = '';
    image = '';
    variations = [];
    description = '';

    constructor(name, image, variations, description = '') {
        this.name = name;
        this.image = image;
        this.variations = variations;
        this.description = description;
    }

    getProgression() {
        let highestPercentage = 0;

        for (const {maxPoints, countableItems} of this.variations) {
            let gainedPoints = 0;

            for (const {item, requiredAmount} of countableItems) {
                gainedPoints += isNaN(requiredAmount) ? localStorage.getItem(item.id) | 0 : Math.min(localStorage.getItem(item.id) | 0, requiredAmount);
            }

            const percentage = Math.floor(100 * gainedPoints / maxPoints);

            if (percentage > highestPercentage) {
                highestPercentage = percentage;
            }
        }

        return highestPercentage;
    }
}
