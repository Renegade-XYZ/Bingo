export class Item {

    id = -1;
    name = '';

    constructor(name) {
        this.id = btoa(name);
        this.name = name;
    }

    toString() {
        return this.name;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name
        };
    }
}