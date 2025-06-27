interface Elemelons {
    Element: string;
    Sort: string;
    "Element Index": number;
}


abstract class Melon {
    public weight: number;
    public melonSort: string;
    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
 
    get elementIndex(): number {
        return this.weight * this.melonSort.length
    }
};

class Watermelon extends Melon {
    public element: string = 'Water';
    toString(): string {
        const melonInfo: Elemelons = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        }
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`
        }
        return result.trim();
    }
}

class Firemelon extends Melon {
    public element: string = 'Fire';
    toString(): string {
        const melonInfo: Elemelons = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        }
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`
        }
        return result.trim();
    }
}

class Earthmelon extends Melon {
    public element: string = 'Earth';
    toString(): string {
        const melonInfo: Elemelons = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        }
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`
        }
        return result.trim();
    }
}

class Airmelon extends Melon {
    public element: string = 'Air';
    toString(): string {
        const melonInfo: Elemelons = {
            Element: this.element,
            Sort: this.melonSort,
            "Element Index": this.elementIndex
        }
        let result = '';
        for (const key in melonInfo) {
            result += `${key}: ${melonInfo[key]}\n`
        }
        return result.trim();
    }
}

class Melolemonmelon extends Watermelon {
    private elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    morph(): void {
        const toReplace: string = this.elements.shift();
        this.elements.push(toReplace);
        this.element = this.elements[0];
    }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let morphedMelon: Melolemonmelon = new Melolemonmelon(12.5, 'Kingsize');
console.log(morphedMelon.element);
morphedMelon.morph();
console.log(morphedMelon.toString());
morphedMelon.morph();
console.log(morphedMelon.toString());