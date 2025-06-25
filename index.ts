class User {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    sayHello() {
        return `${this.#name} says hi to everyone!`;
    }
}

const user = new User('Pesho');
console.log(user.sayHello());