---
title: 스코프
---

## 전역 스코프
스코프는 계층적이며 트리의 맨 아래에는 바탕이 되는 무언가가 있어야 합니다. 즉, 프로그램을 시작할 때 암시적으로 주어지는 스코프가 필요합니다. 이 스코프를 전역 스코프라고 합니다. 자바스크립트 프로그램을 시작할 때, 즉 어떤 함수도 호출하지 않았을 때 실행 흐름은 전역 스코프에 있습니다. 바꿔 말해, _**전역 스코프에서 선언한 것은 무엇이든 프로그램의 모든 스코프에서 볼 수 있습니다.**_

### 전역변수
전역 스코프에서 선언된 것들을 `전역변수`라고 합니다.

```javascript
/* 전역스코프 */
let name = '홍길동';    // 전역변수
let age = 45;         // 전역변수

function printPerson() {
    console.log(`name: ${name}, age: ${age}`);
}
```
## 블록 스코프
let과 const는 식별자를 블록(중괄호로 묶은 것) 스코프에서 선언합니다. 블록 스코프는 그 블록의 스코르에서만 보이는 식별자를 의미합니다.
```javascript
console.log('전역 스코프');
{
    console.log('블록 스코프');
    const number = 3;
    console.log(number);    // 3
}
console.log(number);    // number is not defined
```

:::tip
위 예제에서는 독립블록을 사용했습니다. 블록은 보통 **if나 for같은 제어문의 일부분**으로 쓰이지만, 독립블록 그 자체로도 유효한 문법입니다. 하지만 **현실적으로 잘 쓰이지 않습니다.**
:::

## 변수 숨김 (variable masking)
스코프가 중첩되는 경우를 보고 변수 숨김을 이해해 보겠습니다.

```javascript
{
    // 외부 블록
    let x = 'blue';
    console.log(x);     // "blue"
    {
        // 내부 블록
        let x = 3;
        console.log(x); // 3
    }
    console.log(x);     // "blue"
}
console.log(typeof x);  // 
```
이 예제는 변수 숨김(variable masking)을 잘 보여줍니다. 내부 블록의 x는 외부 블록에서 정의한 x와는 이름만 같은 뿐 다른 변수이므로 외부 스코프의 x를 숨기는(가리는) 효과가 있습니다.
<br>
여기서 이해해야 할 중요한 점은, 실행 흐름이 내부 블록에 들어가 새 변수 x를 정의하는 순간, **_두 변수가 모두 스코프 안에 있다는 겁니다._**
<br>
다음 예제를 보면 더 자세히 알 수 있습니다.

```javascript
{
    // 외부 블록
    let x = { color: 'blue' };
    let y = x;      // y와 x는 같은 객체를 가리킵니다.
    let z = 3;
    {
        // 내부 블록
        let x = 5;              // 이제 바깥의 x는 가려졌습니다.
        console.log(x);         // 5
        console.log(y.color);   // "blue"; 외부스코프 y와 x가 가리키는 객체는 스코프 안에 있습니다.
        y.color = 'red';
        console.log(z);         // 3; z는 숨겨지지 않았습니다.
    }
    console.log(x.color);       // "red"; 객체는 내부 스코프에서 수정됐습니다.
    console.log(y.color);       // "red"; x와 y는 같은 객체를 가리킵니다.
    console.log(z);             // 3
}
```

## 클로저
클로저는 내부 함수가 정의될 때 외부 함수의 환경을 기언하고 있는 애부 함수를 말합니다.

```javascript
// 외부함수
function getClosure() {
    let number = 5;
    // 내부 함수 (클로저) 선엄
    return function (x) {
        return x * number;
    }
}
let cal = getClosure();
console.log(cal(5));    // 25
// getClosure 함수의 스코프가 종료가 되었으나, 클로저 함수에서 number변수에 접근 가능
```

### 클로저의 활용
클로저는 단독으로 호출돼도 외부 함수의 정보와 연결되어 있기 때문에 값들이 동적으로 바뀌어도 반영된다는(기억) 장점이 있습니다.

```javascript
const f = (function () {
    let count = 0;
    return function () {
        return `${++count} 번째 호출 됐습니다.`;
    }
})()
f();    // 1 번째 호출 됐습니다.
f();    // 2 번째 호출 됐습니다.
```
- **클로저 장점**
    - 전역 변수를 대체하여 클로저를 사용할 수 있어서, 전역 변수의 남용을 막을 수 있다.
    - 값을 은익하는 용도로도 사용할 수 있습니다.

## 즉시 실행 함수
즉시 실행 함수(Immediately-invoked function expression)는 말그래도 선언 한 즉시 실행되는 함수이며 IIFE 라고도 한다.
```javascript
// 즉시 실행 함수 구문
(function () {
    // IIFE 바디
})()
```
IIFE의 장점은 내부에 있는 것들이(함수, 스코프 등) 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 겁니다.
```javascript
const message = (function () {
    const name = '홍길동';
    const age = 23;
    return `내 이름은 ${name}, 나이는 ${age}살 입니다.`;
})()
console.log(message);
```
- 변수 `name`, `age`는 IIFE의 스코프 안에서 안전하게 보호되며, 외부에서 접근 불가
- IIFE는 함수이므로 무엇이든 반환 가능
:::tip
자신이 몇 번 호출됐는지 보고하는 함수를 생각해 봅시다. 이 함수가 몇번 호출됐는지 저장한 값을 **_외부에서는 절대 손댈 수 없습니다._**
:::

## 함수 스코프와 호이스팅
var로 선언한 변수는 끌어올린다는 뜻의 호이스팅(hoisting)이라는 메커니즘을 따릅니다. 자바스크립트는 함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 맨 위로 끌어올립니다. 여기서 중요한 것은 선언만 끌어올려진다는 것이며, 할당은 끌어 올려지지 않는 다는 겁니다.
- 원래 코드
```javascript
x;      // undefined
var x = 3;
x;      // 3
```
- 자바스크립트가 해석한 코드 (hoisting)
```javascript
var 3;
x;      // undefined
x = 3;
x;      // 3
```

## 함수 호이스팅
var로 선언된 변수와 마찬가지로, 함수 선언도 스코프 맨 위로 끌어올려집니다. 따라서 함수를 선언하기 전에 호출할 수 있습니다.
```javascript
f();            // 'f'
function f() {
    console.log('f');
}
```
:::tip
잠깐, 별수에 할당한 함수 표현식은 끌어올려지지 않습니다. 예) let f = function () { ... }
:::

## 스트릭트 모드
ES5 문법에서는 암시적 전역 변수(implict global)라는 것이 생길 수 있었습니다. 암시적 전역 변수는 여러 가지 골치 아픈 에러를 일으키곤 했습니다. 간단히 말해 var로 변수를 선언하는 것을 잊으면 자바스크립트는 전역 변수를 참조하려 한다고 간주하고, 그런 전역 변수가 존재하지 않으면 스스로 만들었습니다. <br>
스트릭트 모드는 암시적 전역 변수와 묵인 했던 여러가지 이상한 문법을 허용하지 않습니다.
```javascript
"use strict"; // 또는 'use strict';
number = 1; // number is not defined
```