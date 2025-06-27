class Box {
    contents = [];
    add(item) {
        this.contents.push(item);
    }
    remove() {
        return this.contents.pop();
    }
    get count() {
        return this.contents.length;
    }
    toString() {
        return this.contents.join(', ');
    }
}
// Пример: box за числа
const numberBox = new Box();
numberBox.add(10);
numberBox.add(20);
console.log(numberBox.toString()); // Output: 10, 20
console.log(numberBox.remove()); // Output: 20
console.log(numberBox.count); // Output: 1
// Пример: box за стрингове
const stringBox = new Box();
stringBox.add("apple");
stringBox.add("banana");
console.log(stringBox.toString()); // Output: apple, banana
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
let box1 = new Box();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
//# sourceMappingURL=exercise5.js.map