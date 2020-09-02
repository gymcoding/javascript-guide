---
title: 배열과 배열처리
---

## 배열의 기초
배열의 기본적인 특징을 살펴 보겠습니다.
- 순서가 있는 데이터 집합이며 0으로 시작하는 숫자형 인덱스를 사용합니다.
- 자바스크립트의 배열은 배열의 요소가 모두 같은 타입일 필요는 없습니다. 즉, 배열은 다른 배열이나 객체도 포함할 수 있습니다.
- 배열 리터럴은 대괄호로 만들고, 배열 요소에 인덱스로 접근할 때도 대괄호를 사용합니다.
- 모든 배열에는 요소가 몇 개 있는지 나타내는 length 프로퍼티가 있습니다.
- 배열에 배열 길이보다 큰 인덱스를 사용해서 요소를 할당하면 배열은 자동으로 그 인덱스에 맞게 늘어나며, 빈자리는 undefined로 채워집니다.
- Array 생성자를 써서 배열을 만들 수도 있지만 그렇게 해야 하는 경우는 별로 없습니다.

### 배열 기초 문법 확인
```javascript
// 배열 리터럴 (배열 값)
const arr1 = [1, 2, 3];                         // 숫자로 구성된 배열
const arr2 = ['one', 2, 'three'];               // 비균질적 배열
const arr3 = [[1, 2, 3], ['one', 2, 'three']];  // 배열을 포함한 배열
const arr4 = [                                  // 객체를 포함한 비균질적 배열
    { name: '홍길동', age: 23, speak() { console.log(`나는 ${this.name} 입니다.`) } },
    [
        { name: '이길동', age: 33, speak() { console.log(`나는 ${this.name} 입니다.`) } },
        { name: '삼길동', age: 33, speak() { console.log(`나는 ${this.name} 입니다.`) } },
    ],
    { name: '강길동', age: 43, speak() { console.log(`나는 ${this.name} 입니다.`) } }
];

// 배열 요소에 접근하기
console.log(arr1[0]);   // 1
console.log(arr1[2]);   // 3
console.log(arr3[1]);   // ['one', 2, 'three']
console.log(arr4[1][0]);   // { name: '이길동', age: 33, speak() ... }

// 배열 길이
console.log(arr1.length);       // 3
console.log(arr4.length);       // 3
console.log(arr4[1].length);    // 2

// 배열 길이 늘리기
arr1[4] = 5;
console.log(arr1);          // [1, 2, 3, undefined, 5]
console.log(arr1.length);   // 5

// 인덱스 접근하는 것만으로 길이가 늘어나지 않습니다.
arr1[10];
console.log(arr1.length);   // 5

// Array 생성자(거의 사용하지 않습니다.)
const arr5 = new Array();           // 빈 배열 (= [])
const arr6 = new Array(1, 2, 3);    // [1, 2, 3]
const arr7 = new Array(2);          // [undefined, undefined]; 길이가 2인 배열
const arr8 = new Array("2");        // ["2"]
```

## 배열 기초 API

### push, pop

### shift, unshift
:::tip
shift와 unshift는 전체 배열요소의 이동이 일어나기 때문에 성능상 느리다.
:::
### concat

### slice

### splice

### copyWithin
> ES6에서 도입한 새 메서드

### fill
> ES6에서 도입한 새 메서드

### reverse

### join

## 배열 검색 API

### indexOf

### lastIndexOf

### findIndex

### find

### some

### every

## 배열 map과 filter

## 배열의 마법 reduce