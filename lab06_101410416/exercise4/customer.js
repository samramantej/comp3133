"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
    getAge() {
        console.log(`${this.firstName} is ${this.age} years old.`);
    }
}
exports.Customer = Customer;
