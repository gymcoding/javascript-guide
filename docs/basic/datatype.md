---
title: 데이터 타입
---

## 데이터 타입
데이터 타입은 프로그램에서 다룰 수 있는 값의 종류를 말합니다. 자바스크립트에서는 더 이상 작은 단위로 나뉘어 질 수 없는 원시값인
**프리미티브 타입(primitive type)** 과 이러한 원시값들을 묶어서 한 단위로 관리하는 **객체 타입(object type)** 이 있습니다.

- 프리미티브 타입 종류
    - 숫자 (number)
    - 문자열 (string)
    - 불리언 (boolean)
    - null
    - undefined
    - 심볼 (symbol)

- 객체 타입
    - Object
    - Array
    - Date
    - Function
    - 이외에 프리미티브 타입을 제외한 객체 타입

## 숫자
자바스크립트에서는 숫자를 표현할 때 `number` 타입을 사용합니다.
자바와 같은 다른언어 에서는 정수냐 소수에 따라 숫자 타입이 달라지고, 또한 데이터 크기에 따라서도 타입을 다르게 할 수 있지만 자바스크립트에서는 모든 숫자를 `number` 타입으로 표기할 수 있습니다.
```java
// 자바의 숫자 타입 선언 예
byte a = 12;        // 1bytes
short b = 12;       // 2bytes
int d = 12;         // 4bytes
long c = 12;        // 8bytes
float e = 1.2f;     // 4bytes
double f = 1.2;     // 8bytes
```
```javascript
// 자바스크립트 숫자 타입 선언 예
const a = 12;       // number type
const b = 1.2;      // number type
```
위와 같이 정수, 소수점 구분없이 모두 `number` 타입으로 구분되며, 또한 데이터 선언 시에도 `let` 또는 `const` 로 선언할 수 있습니다.

:::tip 자바스크립트에서는 데이터 타입이 런타임(Run Time)시에 결정되기 때문에 `let` 또는 `const` 로 데이터를 선언합니다.
<br>
:::

### 숫자의 특별한 값
숫자 타입에서도 특별한 값이 미리 정해져 있는 경우가 있습니다.
- `Infinity` - 양수를 0으로 나누는 경우
- `-Infinity` - 음수를 0으로 나눈는 경우
- `NaN` - 숫자가 아닌 값을 나누는 경우
```javascript
const infinity = 1 / 0;             // Infinity 값 할당
const negativeInfinity = 1 / 0;     // -Infinity 값 할당
const nAn = 'not a number' / 0;     // NaN 값 할당
```

## 문자열
문자열(string)은 텍스트 데이터 입니다. 자바스크립트에서는 문자열을 표현할 때 작은따옴표('), 큰따옴표("), 백틱(`)을 사용합니다.
:::tip 백틱(`)은 ES6에서 도입된 문법입니다.
<br>
:::

```javascript
const name1 = '홍길동';     // 싱글쿼터 표현
const name2 = "한길동";      // 더블쿼터 표현
const name3 = `김길동`;    // 백틱 표현
```
:::

### 이스케이프
문자열 안에 "(큰따옴표)를 표현하려면 어떻게 해야 할까요? \\(역슬래쉬)를 써서 따옴표를 이스케이프하면 문자열이 여기서 끝나지 않았다고 자바스크립트에 알릴 수 있습니다.

```javascript
const dialog1 = "내가 즐겨하는 운동은 "헬스" 입니다."; // 오류
const dialog2 = "내가 즐겨하는 운동은 \"헬스\" 입니다."; // 출력 : 내가 즐겨하는 운동은 "헬스" 입니다.
const dialog3 = "역슬래쉬 표현도 이렇게 \\ 합니다."; // 출력 : 역슬래쉬 표현도 이렇게 \ 합니다.
```

### 특수문자
역슬래시(\\)는 따옴표(")를 이스케이프 할 때만 쓰지는 않습니다. 줄바꿈 문자처럼 화면에 표시되지 않는 일부 특수문자나 임의의 유니코드 문자를 나타낼 때도 역슬래시를 사용합니다.

| 코드 | 설명 | 예제 |
|---|:---:|---:|
| `\n` | 줄바꿈 문자 | "Line1\nLine2" |
| `\r` | 캐리지 리턴 | "Windows line 1\r\nWindows line 2" |
| `\t` | 탭 | "Speed:\t60kph" |
| `\'` | 작은따옴표 | "Don\'t" |
| `\"` | 큰따옴표 | 'Sam said \"hello\".' |
| `\` | 백틱 | \`New in ES: \\\` strings.\` |

### 템플릿 문자열
값은 문자열 안에 써야 하는 일이 아주 많습니다. ES6 이전에는 +기호를 통하여 값과 문자열을 연결했다면 `ES6`에서는 백틱(`)를 이용하여 편리하게 문자열과 값을 연결할 수 있습니다.

```javascript
const name = '홍길동';
const age = 25;
console.log('내 이름은 ' + name + ' 입니다. 그리고 나이는 ' + age + '살 입니다.');
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.
console.log(`내 이름은 ${name} 입니다. 그리고 나이는 ${age}살 입니다.`);
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.
```

### 여러줄 문자열
백틱(`)을 사용하여 여러줄 문자열을 쉽게 표현할 수 있습니다.
- 기존 여러줄 문자열 표현
```javascript
const str = 'Line1\nLine2\nLine3';
console.log(str);
/*
Line1
Line2
Line3
*/
```
- 백틱(``) 여러줄 문자열 표현
```javascript
const str = `Line1
Line2
Line3`;
console.log(str);
/*
Line1
Line2
Line3
*/
```

## 불리언
불리언은 `true`와 `false` 두 가지 값밖에 없는 데이터 타입입니다.
```javascript
const isProgramer = true;
const isDesigner = false;
```

## 심볼
심볼은 유일한 토큰을 나타내기 위해 `ES6`에서 도입한 새 데이터 타입입니다. 심볼은 항상 유일합니다.
우연히 다른 식별자와 혼동해서는 안 되는 고유한 식별자가 필요하다면 심볼을 사용하십시오.
```javascript
const TOM_JOB = Symbol('My Job is Programer');
const KIM_JOB = Symbol('My Job is Programer');
console.log(TOM_JOB == KIM_JOB); // false: 심볼은 모두 서로 다릅니다.
```

## null과 undefined
`null`과 `undefined`는 자바스크립트의 특별한 타입입니다. null이 가질 수 있는 값은 null 하나 뿐이며, undefined가 가질 수 있는 값도 undefined 하나뿐입니다. null과 undefined는 모두 존재하지 않는 것을 나타냅니다. 그리고 이 둘을 서로 다른 데이터 타입으로 분리한 것은 끝 없는 혼란을 낳았고, 특히 초보자들이 고생하고 있습니다.
<br>

```javascript
const currentTemp = null;   // 아무것도 없음을 할당 할 때
const currentHum;   // 값이 할당되지 않음 undefined

console.log(currentTemp);   // null 출력
console.log(currentHum);   // undefined 출력
```

## 객체
**객체는 연관된 데이터를 담는 그릇입니다.** <br>
프리미티브 타입(primitive type)은 단 하나의 값만 나타낼 수 있고 불변이지만, 이와 달리 객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있으며, 값이 변할 수도 있습니다. 객체의 본질은 `컨테이너`입니다. 컨테이너의 내용물은 시간이 지나면서 바뀔 수 있지만, 내용물이 바뀐다고 컨테이너가 바뀌는 건 아닙니다. 즉, 여전히 같은 객체입니다. 객체의 표현은 중괄호`{}`로 표현할 수 있습니다.
```javascript
// 빈 객체 선언
const obj = {};            // object 리터럴 문법
const obj = new Object();  // object 생성자 문법
```
객체안의 데이터는 `프로퍼티(property)` 또는 `멤버(member)` 라고 부릅니다. 프로퍼티는 키와 값으로 구성됩니다. 프로퍼티 키는 반드시 문자열 또는 심볼이어야 하며, 값은 어떤 타입이든 상관없고 다른 객체여도 괜찮습니다.<br>
obj에 color라는 데이터를 추가합시다.
```javascript
obj.color = 'yellow';
```

### 객체에 프로퍼티를 추가하는 방법
- 객체 선언과 동시에 추가
```javascript
const person = {
    name: '홍길동',
    age: 28
};
const person2 = { name: '김길동', age: 33 } // 한줄 선언
```
- 멤버 접근 연산자(.) 사용
```javascript
const person = {}
person.name = '홍길동';
person.age = 28;
```

- 계산된 멤버 접근 연산자([]) 대괄호 사용
```javascript
const person = {}
person['name'] = '홍길동';
person['age'] = 28;
```

### 다양한 프로퍼티 값
객체의 프로퍼티 값으로는 프리미티브 타입 뿐만 아니라 또 다른 객체, 함수 등 다양한 값이 할당될 수 있습니다.
```javascript
const person = {
    name: '홍길동',     // 프로퍼티로 문자열 할당
    academy: {          // 프로퍼티로 객체 할당
        academyName: '컴퓨터학원',
        address: '서울 가산디지털 단지역'
    },
    sayMe: function () {    // 프로퍼티로 함수 할당
        console.log('제 이름은 홍길동 입니다.')
    }
}
```