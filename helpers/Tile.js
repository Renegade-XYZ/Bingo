export class Tile {

    name = '';
    image = '';
    variations = [];

    constructor(name, image, variations) {
        this.name = name;
        this.image = image;
        this.variations = variations;
    }

    getProgression() {
        let highestPercentage = 0;

        for (const {countableItems} of this.variations) {
            let maxPoints = 0;
            let gainedPoints = 0;

            for (const {item, requiredAmount} of countableItems) {
                maxPoints += requiredAmount;
                gainedPoints += localStorage.getItem(item.id) | 0;
            }

            const percentage = Math.floor(100 * gainedPoints / maxPoints);

            if (percentage > highestPercentage) {
                highestPercentage = percentage;
            }
        }

        return highestPercentage;
    }
}
