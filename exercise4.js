class Melon {
    weight;
    melonSort;
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
;
class Watermelon extends Melon {
    element = 'Water';
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        const melonInfo = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        };
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`;
        }
        return result.trim();
    }
}
class Firemelon extends Melon {
    element = 'Fire';
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        const melonInfo = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        };
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`;
        }
        return result.trim();
    }
}
class Earthmelon extends Melon {
    element = 'Earth';
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        const melonInfo = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        };
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`;
        }
        return result.trim();
    }
}
class Airmelon extends Melon {
    element = 'Air';
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    toString() {
        const melonInfo = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        };
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`;
        }
        return result.trim();
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
//# sourceMappingURL=exercise4.js.map