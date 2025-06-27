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
class Melolemonmelon extends Watermelon {
    elements = ['Water', 'Fire', 'Earth', 'Air'];
    morph() {
        const toReplace = this.elements.shift();
        this.elements.push(toReplace);
        this.element = this.elements[0];
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let morphedMelon = new Melolemonmelon(12.5, 'Kingsize');
console.log(morphedMelon.element);
morphedMelon.morph();
console.log(morphedMelon.toString());
morphedMelon.morph();
console.log(morphedMelon.toString());
//# sourceMappingURL=exercise4.js.map