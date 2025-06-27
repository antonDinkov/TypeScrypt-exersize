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
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }
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
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }
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
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }
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
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }
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

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());