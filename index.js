class User {
    #name;
    constructor(name) {
        this.#name = name;
    }
    sayHello() {
        return `${this.#name} says hi to everyone!`;
    }
}
const user = new User('Pesho');
console.log(user.sayHello());
//# sourceMappingURL=index.js.map