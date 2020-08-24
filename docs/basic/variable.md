---
title: 변수, 상수
---

# 변수, 상수, 데이터 타입

## 변수
변수란 간단히 값을 담는 그릇 입니다.
변수라는 이름이 암시하듯 값은 언제든 바뀔 수 있습니다.
변수를 선언할 때는 `let`이라는 키워드로 변수를 선언합니다.


```javascript
let currentTempC = 20;      // 섭씨온도 변수선언 후 초기값 20 할당
console.log(currentTempC)   // 20
currentTempC = 22.5         // 섭씨온도 변수의 값을 22.5로 변경
console.log(currentTempC)   // 22.5
```
`let`은 변수 선언에만 쓰이고, 각 변수는 한 번만 선언할 수 있습니다.
:::tip let 키워드는 ES6에서 새로 생겼습니다. ES6 이전에는 var키워드만 사용할 수 있었습니다.
<br>
:::

변수를 선언할 때 꼭 초기값을 지정해야 하는 건 아닙니다. 초기값을 할당하지 않으면 암시적으로 특별한 값 `undefined`가 할당됩니다.

```javascript
let targetTempC;            // 암시적으로 undefined가 할당됨
console.log(targetTempC)    // undefined
```

`let`키워드 하나에서 변수 여러 개를 선언할 수 있습니다.

```javascript
let targetTempC, name = '홍길동', age = 25;     // 변수 세 개를 선언
// targetTempC = undefined (암시적 할당)
// name = '홍길동'
// age = 25
```

## 상수
상수는 ES6에서 새로 생겼습니다. 상수도 변수와 마찬가지로 값을 할당받을 수 있지만, <strong>한 번 할당한 값을 바꿀 수는 없습니다.</strong>
```javascript
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
```
:::tip 상수는 ES6에서 새로 생겼습니다.
<br>
:::

## 식별자 이름
변수와 상수, 함수 이름을 식별자(identifier)라 부릅니다. 그리고 식별자에는 규칙이 있습니다.
- 식별자는 반드시 글자나 달러 기로($), 밑줄(_)로 시작해야 합니다.
- 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있습니다.
- 𝒳나 𝒴 같은 유니코드 문자도 쓸 수 있습니다.
- 예약어는 식별자로 쓸 수 없습니다(부록 A에 예약어를 정리했습니다).
```javascript
let 2number = 2;    // [X] 식별자 맨 앞에 숫자가 올 수 없음
let $number = 2;    // [O]
let _number = 2;    // [O]
let number2 = 2;    // [O]
```

## 네이밍 규칙(Rule)
자바스크립트 식별자 네이밍 규칙은 여러 가지가 있지만, 가장 널리 쓰는 두 가지는 다음과 같습니다.
- **카멜 케이스(Camel Case)**<br>
currentTempC, anIdentifierName등은 카멜 케이스에 따라 이름을 지은 겁니다. 카멜 이란 이름은 중간중간의 대문자가 낙타의 혹처럼 보인다고 해서 붙었습니다.
<br>

- **스네이크 케이스(Snake Case)**<br>
current_temp_c, an_identifier_name 등은 스네이크 케이스에 따라 이름을 지은 겁니다. 스네이크 케이스는 카멜 케이스보다는 조금 덜 쓰입니다.
<br>

- **케밥 케이스(Kebab Case)**<br>
예) current-temp-c, an-identifier-name
<br>

- **파스칼 케이스(Pascal Case)**<br>
예) CurrentTempC, AnIdentifierName
