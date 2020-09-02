---
title: 객체지향 프로그래밍
---

## 클래스 생성
ES6 이전에 자바스크립트에서 클래스를 만드는 건 직관적이지도 않고 무척 번거로운 일이었씁니다. ES6에서는 클래스를 만드는 간편한 새 문법을 도입했습니다.

- ES6 이전
```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.speak = function() {
        console.log(`내 이름은 ${this.name}, 나이는 ${this.age}살 입니다.`);
    }
}
```
- ES6 이후
```javascript
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    speak () {
        console.log(`내 이름은 ${this.name}, 나이는 ${this.age}살 입니다.`);
    }
}
```

## 인스턴스 생성
클래스를 통하여 만들어진 객체를 해당 클래스의 `인스턴스` 라고 합니다.
그리고 인스턴스를 만들 땐는 `new` 키워드를 사용합니다.
```javascript
const person1 = new Person('홍길동', 33);
const person2 = new Person('김길동', 20);
// 객체 person1과 person2는 Person 클래스의 인스턴스 입니다.
```
위 예제로 Person 클래스의 인스턴스 두개를 생성 하였습니다. 만약 코드에서 Person 클래스의 인스턴스인지 확인 하기가 힘들다면 `instanceof`연산자로 확인 할 수 있습니다.
```javascript
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
console.log(person2 instanceof Array);  // false
```
위 예제를 보면 person1과 person2는 Person 클래스의 `인스턴스`이고 Array의 인스턴스는 아님을 알 수 있습니다.

## getter, setter

## public, private, static