class Box<T> {
    private contents: T[] = [];

    add(item: T): void {
        this.contents.push(item);
    }

    remove(): T | undefined {
        return this.contents.pop();
    }

    get count(): number {
        return this.contents.length;
    }

    toString(): string {
        return this.contents.join(', ');
    }
}

// Пример: box за числа
const numberBox = new Box<number>();
numberBox.add(10);
numberBox.add(20);
console.log(numberBox.toString());  // Output: 10, 20
console.log(numberBox.remove());    // Output: 20
console.log(numberBox.count);       // Output: 1

// Пример: box за стрингове
const stringBox = new Box<string>();
stringBox.add("apple");
stringBox.add("banana");
console.log(stringBox.toString());  // Output: apple, banana

let box = new Box<Number>(); 

box.add(1); 

box.add(2); 

box.add(3); 

console.log(box.count);

let box1 = new Box<String>();

box1.add("Pesho"); 

box1.add("Gosho"); 

console.log(box1.count); 

box1.remove(); 

console.log(box1.count);