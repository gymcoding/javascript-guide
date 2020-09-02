// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.speak = function() {
//         console.log(`내 이름은 ${this.name}, 나이는 ${this.age}살 입니다.`);
//     }
// }
// var person = new Person('홍길동', 23);
// person.speak();

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    speak () {
        console.log(`내 이름은 ${this.name}, 나이는 ${this.age}살 입니다.`);
    }
}
var person = new Person('홍길동', 23);
person.speak();