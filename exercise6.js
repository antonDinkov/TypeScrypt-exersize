"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    #key;
    #val;
    setKeyValue(key, value) {
        this.#key = key;
        this.#val = value;
    }
    ;
    display() {
        console.log(`key = ${this.#key}, value = ${this.#val}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
exports.default = KeyValuePair;
//# sourceMappingURL=exercise6.js.map