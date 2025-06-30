class KeyValuePair<T, U>{
    #key: T;
    #val: U;

    setKeyValue (key: T, value: U): void {
        this.#key = key;
        this.#val = value;
    };
    display(): void {
        console.log(`key = ${this.#key}, value = ${this.#val}`);
    }
}

let kvp = new KeyValuePair<number, string>(); 

kvp.setKeyValue(1, "Steve"); 

kvp.display(); 

export default KeyValuePair;