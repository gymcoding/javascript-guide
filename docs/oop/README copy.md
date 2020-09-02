---
title: 프로퍼티 나열
---

## for ... in
객체 프로퍼티를 나열할 때 `for ... in` 반복문을 사용할 수 있습니다.
```javascript
let person = {
  name: '홍길동',
  age: 23,
  job: 'programer'
};

for (let key in person) {
  console.log(`property key: ${key}, value: ${person[key]}`);
}
//
// property key: name, value: 홍길동
// property key: age, value: 23
// property key: job, value: programer
```