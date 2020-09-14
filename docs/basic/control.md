---
title: 제어문
---

## if문
### if
`조건(condition)`이 `참(true)`인 경우 명령문을 실행합니다.
```javascript
if (condition) {
    // condition이 true 인경우 해당 블록의 명령문 수행
}
```

### else
`조건(condition)`이 `거짓(false)`인 경우 명령문을 실행합니다.
```javascript
if (condition) {
    // condition이 true 인경우 해당 블록의 명령문 수행
} else {
    // condition이 false 인경우 해당 블록의 명령문 수행
}
```

### else if
`else if (다중조건)`을 사용하여, 여러개의 조건을 확인 할 수 있다.
```javascript
if (condition1) {
    // condition1이 true일 경우 해당 블록 명령문 수행
} else if (condition2) {
    // condition2이 true일 경우 해당 블록 명령문 수행
} else if (condition3) {
    // condition3이 true일 경우 해당 블록 명령문 수행
} else if (condition4) {
    // condition4이 true일 경우 해당 블록 명령문 수행
} else {
    // 위 모든 조건이 false일 경우 해당 명령문 수행
}
```
## switch문
`switch`문은 `표현식`의 값을 `case`절에 일치시키고 해당 `case`와 관련된 명령문을 수행합니다.
```javascript
const language = 'javascript';
switch (job) {
    case 'java':
        console.log('Good!')
        break;
    case 'css':
        console.log('Love!')
        break;
    case 'javascript':
        console.log('Love!')
        break;
    default:
        console.log('모든 case 절과 일치하지 않다면 해당 명령문 수행')
}
```
job과 일치하는 `case`절의 명령문을 수행한 후 `break`명령문을 만나면 `switch`문을 종료한다.
```javascript
const language = 'css';
switch (job) {
    case 'java':
        console.log('Good!')
        break;
    case 'css':
    case 'javascript':
        console.log('Love!')
        break;
    default:
        console.log('모든 case 절과 일치하지 않다면 해당 명령문 수행')
}
```
'css' `case`절에 `break`가 없음으로 다음 `case`절 까지 수행 한다.

## for, for...in, for...of 문
### for문
`for`루프는 정해진 숫자만큼 반복하려 할 때 사용합니다. 그리고 `for`문 안의 괄호는 `초기화`, `조건식`, `표현식`으로 구성 되어있습니다.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(`명령문 ${i} 번째`);
}
// [출력]
// 명령문 0 번째
// 명령문 1 번째
// 명령문 2 번째
// 명령문 3 번째
// 명령문 4 번째
```
1. `let i = 0`으로 초기화 한 후,<br>
2. `i < 5`조건식이 만족하면<br>
3. `console.log('...')`명령문을 수행하고<br>
4. `i++` 표현식을 수행합니다.
5. 그리고 다시 `2`번을 반복 수행을 하다가 `조건식(i < 5)`이 거짓이면 `for`문이 종료됩니다.

### for ... in 문
object에 있는 항목들을 반복적으로 반환하여 '무언가'를 할 수 있게 해줍니다.
```javascript
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// 출력:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for ... of
반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// expected output: 
// "a"
// "b"
// "c"

```


## while, do...while 문
### while
while문은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.
```javascript
let n = 0;
let x = 0;
while (n < 3) {
  n++;      // n = n + 1
  x += n;   // x = x + n 
}
console.log(n)
console.log(x)
// 출력
// 3
// 6
```
### do...while
do...while문은 조건문이 참일 때 실행되는 반복문이다. 단 최초 한번은 무조건 수행이됨.
```javascript
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
```

## continue
continue 문은 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.
```javascript
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"
```

## break
break 문은 현재 반복문, switch 문, 또는 label 문을 종료하고, 그 다음 문으로 프로그램 제어를 넘깁니다.
```javascript
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// expected output: 3
```

## 예외처리
ㅂㅈ애ㅑㅓ