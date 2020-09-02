---
title: 함수
---

## 함수
함수는 하나의 단위로 실행되는 명령문의 집합입니다. 함수를 일종의 서브 프로그램(sub program)으로 생각해도 좋습니다.
모든 함수에는 바디이 있습니다. 함수 바디는 함수를 구성하는 명령문의 모음입니다.

```javascript
// 1] 함수 선언
function sayHello() { // 함수 바디는 여는 중괄호 '{'로 시작하고 
    console.log('Hello world');
    console.log('Hello javascript');
    console.log('Hello html');
    console.log('Hello css');
} // 닫는 중괄호 '}'로 끝납니다.

// 2] 함수 호출
sayHello();
```

## 반환 값
함수 바디 안에 `return` 키워드를 사용하면 함수를 즉시 종료하고 값을 반환합니다. 그 값이 바로 함수 호출의 값입니다.
```javascript
function getGreeting() {
    return 'Hello world';
}
const value = getGreeting(); // 함수를 호출하고 반환값을 받습니다.
console.log(value);          // "Hello world" 출력
// return 을 하지 않으면 반환 값은 undefined가 됩니다.
```

## 호출과 참조
자바스크립트에서는 **함수도 객체**입니다. 따라서 다른 변수에 처럼 파라미터로 넘기거나 할당 할 수 있습니다.
```javascript
getGreeting();  // 함수 호출
getGreeting;    // 함수 참조

const copyGetGreeting = getGreeting;
copyGetGreeting();  // "Hello world" 출력
```

## 함수와 매개변수
함수에 정보를 전달하려면 어떻게 해야 할까요? 함수를 호출하면서 정보를 전달할 때는 함수 매개변수(argument 또는 parameter)를 이용합니다. 

```javascript
function avg(a, b) {    // a와 b를 매개변수 또는 파라미터 라고 합니다.
    return (a + b) / 2;
}
avg(5, 10); // 7.5
```

### Call By Value
함수의 매개변수로 `value`(값)이 넘어오는 경우입니다. 이때 함수로 넘어온 매개변수는 `복사된 값`입니다.
```javascript
let number = 10;
function add(number) {
    number = number + 10;
    console.log(number);    // 20 출력
}
add(number);
console.log(number) // 10 출력
```
위 예제와 같이 자바스크립트는 원시값을 파라미터로 넘겨주면 Call By Value로 작동합니다.

### Call By Reference
함수의 매개변수로 `reference`가 넘어온다. (reference란 값에 대한. 즉, 메모리 주소)
```javascript
let obj = {
    number: 10
};
function add(obj) {
    obj.number = obj.number + 10;
    console.log(obj.number);    // 20 출력
}
console.log(obj.number);    // 20 출력
```
위 예제와 같이 자바스크립트는 객체(Object, Array 등)를 파라미터로 넘겨주면 Call By Reference가 작동합니다.

### 매개변수 해체
매개변수를 해체(분해)할 수 있습니다.
- 객체를 변수로 해체하는 예제<br>
    매개변수를 `중괄호({})`로 묶어서 받습니다.
```javascript
const obj = {
    name: '홍길동',
    age: 20
}
function printObj({ name, age }) {
    console.log(arguments)
    console.log(`name: ${name}, age: ${age}`)
    // "name: 홍길동, age: 20" 출력
}
printObj(obj);
```
- 배열을 변수로 해체하는 예제<br>
    매개변수를 `대괄호([])`로 묶어서 받습니다.
```javascript
const arr = ['홍길동', '김길동', '한길동'];
function printArr([one, two, three]) {
    console.log(`one: ${one}, two: ${two}, three: ${three}`);
    // "one: 홍길동, two: 김길동, three: 한길동" 출력
}
printArr(arr);
```

## 확산 연산자 (spread operator)
함수로 `...(확산 연산자)`를 사용하여 파라미터를 전달할 수 있습니다. 이때 함수를 선언할 때 환산 연산자는 반드시 마지막 매개변수여야 합니다.
```javascript
function printWords(title, ...words) {
    // 확산 연산자를 사용하여 words 배열로 값을 한번에 받습니다.
    // title = 'Javascript'; 할당
    // words = ['변수', '상수', '함수', '연산자', '객체']; 할당
    for (let word of words) {
        console.log(`word: ${word}`);
    }
}
printWords('Javascript', '변수', '상수', '함수', '연산자', '객체');
```

## 매개변수 기본값

:::tip ES6에서는 매개변수에 기본값(default value)를 지정하는 기능도 추가됐습니다.
<br>
:::
일반적으로 매개변수에 값을 제공하지 않으면 undefined가 값으로 할당됩니다. ES6에서는 기본값을 지정할 수 있습니다.

```javascript
function printProfile(name, age = 20, language = 'javascript') {
    return `${name} - ${age} - ${language}`;
}
printProfile('홍길동', 30, 'Nodejs');   // "홍길동 - 30 - Nodejs"
printProfile('홍길동', 30);   // "홍길동 - 30 - javascript"
printProfile('홍길동');   // "홍길동 - 20 - javascript"
printProfile();   // "undefined - 20 - javascript"
```

## 객체의 프로퍼티인 함수
객체의 프로퍼티인 함수를 메서드(method)라고 합니다.

```javascript
// 객체 프로퍼티로 메서드 선언
const obj1 = {
    name: '홍길동',
    tell: function () {
        console.log('안녕하세요');
    }
}
// ES6 추가된 선언 방법
const obj2 = {
    name: '홍길동',
    tell () {
        console.log('안녕하세요');
    }
}

```

## this 키워드
함수 바디 안에는 읽기 전용 값인 this가 있습니다. 객체 프로퍼티에 정의된 메서드 안에서 this는 호출한 메서드를 소유하는 객체가 됩니다.

```javascript
const obj = {
    name: '홍길동',
    speak() { return `My name is ${this.name}` }
}
console.log(obj.speak()) // "My name is 홍길동" 출력
```

여기서 중요한건 this는 함수를 어떻게 선언했느냐가 아니라! 어떻게 <u>**호출**</u>했느냐에 따라 달라진다는 것을 이해해야 합니다.

```javascript
const speak = obj.speak;
console.log(speak === obj.speak);   // true; 두 변수는 같은 함수를 가리킵니다.
speak();    // "My nams is undefined" 또는 "My nams is "
```
위 예제와 같이 호출을 하게 되면 호출한 객체가 name을 갖고 있지 않기 때문에 undefined가 출력됩니다.
:::tip 자바스크립트에서는 글로벌로 선언한 모든 변수, 함수는 window객체가 소유하게 됩니다. 즉, 위 예제의 this는 window가 됩니다.
<br>
:::

## 익명 함수와 함수 표현식
자바스크립트는 익명함수(anonymous function)도 지원합니다.
```javascript
const f = function() {
    console.log('Hello world');
}
f();    // "Hello world"
```
위 예제에서 익명함수는 `function() { ... }`이 부분에 해당하며, 해당 함수는 표현식에 의해 `f`라는 변수에 할당되며, 함수선언과 마창가지로 사용할 수 있습니다.

## 화살표 표기법(Arrow Function)
:::tip ES6 에서 추가된 화살표 표기법(Arrow Function)이며, 자주 사용되니 꼭 익혀두세요!
<br>
:::
ES6에서 새로 만든 화살표 표기법(arrow function)도 환영받는 문법입니다.
- 화살표 표기법 특징
    - function을 생략해도 됩니다.
    - 함수에 매개변수가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
    - 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있습니다.

```javascript
const f1 = function() { return "hello"; }
// 또는
const f1 = () => "hello";

const f2 = function(name) { return `Hello, ${name}`; }
// 또는
const f2 = name => `Hello, ${name}`;

const f3 = function(a, b) { return a + b; }
// 또는
const f3 = (a, b) => a + b;
```
위 예제는 화살표 함수의 표기법을 보여주기 위한 예제입니다. 실제오 화살표 함수를 사용할 때는 **함수의 파라미터로 함수를 넘기고자 할 때** 입니다.
<br>
:::tip
화살표 함수에는 일반적인 함수와 중요한 차이가 있습니다. this가 다른 변수와 마찬가지로, `정적으로(lecically)` 묶인다는 겁니다.
:::

## call과 apply, bind
### call 메서드
자바스크립트에서는 일반적인 방법 외에도 함수를 어디서, 어떻게 호출 했느냐와 관계없이 this가 무엇인지 지정할 수 있습니다. 먼저 `call`메서드부터 살펴보겠습니다.<br>
`call`메서드는 **모든 함수**에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있습니다.

```javascript
const bruce = { name: 'Bruce' };
const tom = { name: 'Tom' };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}`;
}

greet();            // "Hello, I'm undefined" - this는 어디에도 묶이지 않았습니다.
greet.call(bruce);  // "Hello, I'm Bruce" - this는 bruce 입니다.
greet.call(tom);    // "Hello, I'm Tom" - this는 bruce 입니다.
```
`call` 함수의 첫 번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달됩니다.

```javascript
function update(age, job) {
    this.age = age;
    this.job = job;
}
update.call(bruce, 20, 'programer');
// bruce는 이제 { name 'Bruce', age: 20, job: 'programer' } 입니다.
update.call(tom, 25, 'designer');
// tom은 이제 { name 'Tom', age: 25, job: 'designer' } 입니다.
```

### apply 메서드
apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.

```javascript
update.call(bruce, [20, 'programer']);
// bruce는 이제 { name 'Bruce', age: 20, job: 'programer' } 입니다.
update.call(tom, [25, 'designer']);
// tom은 이제 { name 'Tom', age: 25, job: 'designer' } 입니다.
```

`apply`는 배열 요소를 함수 매개변수로 사용해야 할 때 유용합니다. apply를 설명할 때 흔히 사용하는 예제는 배열의 최소값과 최대값을 구하는 겁니다. 자바스크립트의 내장 함수인 Math.min과 Math.max는 매개변수를 받아 그중 최소값과 최대값을 각각 반환합니다. apply를 사용하면 기존 배열을 이들 함수에 바로 넘길 수 있습니다.

```javascript
const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);  // -5 Origin Use Math.min(2, 3, 4)
Math.max.apply(null, arr);  // 15 Origin Use Math.max(2, 3, 4)
```
:::tip
위 예제에서 this의 값에 null을 쓴 이유는 Math.min과 Math.max가 this의 관계없이 동작하기 때문입니다. 즉, 무엇을 넘기든 관계없습니다.
:::

### bind 메서드
bind를 사용하면 함수의 this 값을 영구적으로 바꿀 수 있습니다.
```javascript
const updateBruce = update.bind(bruce);
updateBruce(33, 'programer');
// bruce는 이제 { name 'Bruce', age: 33, job: 'programer' } 입니다.
updateBruce.call(tom, 33, 'programer');
// bruce는 이제 { name 'Bruce', age: 33, job: 'programer' } 입니다.
// updateBruce 내의 this는 여전히 "bruce" 입니다.
```