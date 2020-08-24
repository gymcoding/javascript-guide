---
title: 연산자
---

## 문자열 병합
문자열은 `+` 연산자를 사용하여 병합할 수 있습니다.
```javascript
console.log('Hello ' + 'World');    // "Hello World" 출력
console.log(3 + 5 + '8');           // "88" 출력
console.log('3' + 5 + 8);           // "358" 출력
```

## 산술 연산자
| 연산자 | 설명 | 예제 |
|---|:---|:---|
| `x + y` | 덧셈(문자열 병합에도 쓰입니다.) | 3 + 2 // 5 |
| `x - y` | 뺄셈 | 3 - 2 // 1 |
| `x / y` | 나눗셈 | 3 / 2 // 1.5 |
| `x * y` | 곱셈 | 3 * 2 // 6 |
| `x % y` | 나머지 | 3 % 2 // 1 |
| `-x` | 단항 부정 | -x // x의 부호를 바꿉니다. x가 5이면 -x는 -5입니다. |
| `+x` | 단항 플러스 | +x // x가 숫자가 아니면 숫자로 변환을 시도합니다. |

## 증감 연산자
| 연산자 | 설명 | 예제 |
|---|:---|:---|
| `++x` | 전위 증가 | ++x // x에 1만큼 증가 시킨 후 -> 현재 명령문을 수행 |
| `x++` | 후위 증가 | x++ // 현재 명령문을 수행 후 -> x에 1을 증가 |
| `--x` | 전위 감소 | --x // x에서 1을 감소한 다음 -> 현재 명령문을 수행 |
| `x--` | 후위 감소 | x-- // 현재 명령문을 수행 후 -> x에 1을 만큼 감소 |

```javascript
const x = 10;
const y = 20;
const result = ++x + y--;   // 11 + 20 (11과 20을 더해서 result에 할당 후 y의 값 1감소)
console.log(result)         // 31
console.log(x)              // 11
console.log(y)              // 19
```

## 비교 연산자
| 연산자 | 설명 |
|---|:---|
| `a > b` | a가 b보다 크다. |
| `a >= b` | a가 b보다 크거나 같다. |
| `a < b` | a가 b보다 작다. |
| `a <= b` | a가 b보다 작거나 같다. |
| `a == b` | a와 b는 같다. |
| `a === b` | a와 b는 같다.(데이터 타입 까지 비교) |
| `a != b` | a와 b는 같지않다. |
| `a !== b` | a와 b는 같지않다.(데이터 타입 까지 비교) |

```javascript
const stringTwo = '2';
const numberTwo = 2;

// == loose equality (타입을 변경해서 검사함)
console.log(stringTwo == numberTwo);    // true
console.log(stringTwo != numberTwo);    // false

// === strick equality (타입도 같은지 검사함)
console.log(stringTwo === numberTwo);   // false
console.log(stringTwo !== numberTwo);   // true

const obj1 = { name: '홀길동' };
const obj2 = { name: '홀길동' };
console.log(obj1 == obj2);      // false
console.log(obj1 === obj2);     // false
// obj1과 obj2 모두 레퍼런스 값이 다르기 때문에 false 출력
```

## 할당 연산자
| 연산자 | 설명 |
|---|:---|
| `x = 3` | x에 숫자 3을 할당해라. |
| `x += y` | x = x + y와 같은 표현. |
| `x -= y` | x = x - y와 같은 표현. |
| `x *= y` | x = x * y와 같은 표현. |
| `x /= y` | x = x / y와 같은 표현. |

## 논리 연산자
논리 연산자는 `불리언(boolean)` 값만 다룰 수 있으며 불리언에는 `false`와 `true` 두 가지 값밖에 없습니다.
<br>
수학에서, 그리고 대부분의 프로그래밍 언어에서 논리 연산자는 불리언 값에서만 동작하며 불리언 값만 반환합니다. 반면 <u>**자바스크립트의 논리 연산자는 불리언이 아닌 값도 다룰 수 있고, 놀랍게도 불리언이 아닌 값을 반환하기도 합니다.**</u>
<br>
<br>
자바스크립트는 불리언 값 외에도 모든 데이터 타입을 참과 거짓으로 구분합니다.
- `false` 로 인식되는 경우
    - undefined
    - null
    - false
    - 0
    - NaN
    - '' (빈 문자열)
- 이외의 모든 값들은 `true(참)`으로 인식됨.

### 논리연산자 AND(&&), OR(||), NOT(!)
| 연산자 | 설명 | 예제 |
|---|:---|:---|
| `x && y` | **피연산자가 모두 true**일 때만 그 외에는 false | (2 > 1) && (3 > 2) // true |
| `x || y` | **피연산자중 하나라도 true**이면 true 그 외에는 false | (2 > 1) \|\| (0 > 2) // true |
| `!x` | NOT(!)연산자는 피연산자를 **반대**로 바꿉니다. | !(0 > 3) // true |

### 단축평가
AND 연산은 피연산자 중 하나라도 `false` 이면, 나머지 피연산자는 평가 할 필요도 없이 `false`입니다.<br>
마찬가지로 OR 연산은 피연산자 중 하나라도 `true`이면, 나머지 피연산자를 평가 할 필요도 없이 `true` 입니다.<br>
이런 동작은 <u>**단축 평가(short-circuit evaluation)**</u>라고 합니다.

## 삼항 연산자
`조건식 ? 값1 : 값2` 조건식이 `true`이면 `값1`을 반환하고, `false`이면 `값2`를 반환합니다.
```javascript
const doIt = false;
const result = doIt ? 'Dis it!' : 'Didn\'t do it';
console.log(result) // 'Didn\'t do it'
```

<br>

:::tip
연산자에 대해 더 자세히 알고 싶다면 [MDN사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90)를 참고 해주세요.
:::
