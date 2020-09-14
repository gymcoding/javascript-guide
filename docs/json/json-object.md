---
title: JSON 변환
---

## Object to JSON 
자바스크립트 객체를 JSON 형식으로 변환하는 방법입니다. 자바스크립트에서 지원하는 JSON객체의 `stringify`메서드를 사용하여 변경할 수 있습니다.

#### 불리언 타입 변환
```javascript
let json = JSON.stringify(true);
console.log(json);  // true
```
#### 배열 타입 변환
```javascript
json = JSON.stringify(['apple', 'banana']);
console.log(json);  // ["apple","banana"]
```

#### 객체 타입 변환
```javascript
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),   // Javascript 에만 있는 '심볼' 타입은 JSON 문자열에서 제외됨
    jump: () => {           // Function은 JSON 문자열에서 제외됨
        console.log(`${name} can jump!`);
    }
}
json = JSON.stringify(rabbit);
console.log(json);
```
#### 객체 타입 변환 - 원하는 프로퍼티만
```javascript
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
```
#### 객체 타입 변환 - 더 세밀하게 JSON 변환을 통제
```javascript
json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? '홍길동' : value;
});
console.log(json);
```


## JSON to Object
이번에는 JSON 형식의 문자열을 자바스크립트 객체로 변환하는 방법을 알아보겠습니다. 방법은 JSON객체의 `parse` 메서드를 사용하면 됩니다.

```javascript
// JSON 형식의 문자열
let json = '{"name":"tori","color":"white","size":null,"birthDate":"2020-09-03T13:00:34.454Z"}';    
let obj = JSON.parse(json);
console.log(obj);
//  {
//      birthDate: "2020-09-03T13:00:34.454Z"
//      color: "white"
//      name: "tori"
//      size: null
//  }
```
위 예제는 JSON형식의 문자열을 Object로 변환하는 방법을 설명하였다 하지만 한가지 문제점이 있다. birthDate 프로퍼티인 값은 Object로 변환하는 과정에서 **date 객체가 아닌 단순한 문자열로 변환**되었기 때문이다.
#### 더 세밀하게 JSON을 Object로 변환
```javascript
// JSON 형식의 문자열
let json = '{"name":"tori","color":"white","size":null,"birthDate":"2020-09-03T13:00:34.454Z"}';
let obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
```

## JSON 관련 유용한 사이트
1. [JSON Diff](http://www.jsondiff.com) - 두 개의 JSON 데이터를 비교하는 사이트
2. [JSON Beautifier](https://jsonbeautifier.org/) - JSON 포맷을 예쁘게 정리해 주는 사이트
3. [JSON Parser](http://json.parser.online.fr/) - JSON을 Object로 확인하고 싶을 때 유용한 사이트
4. [JSON Validator](https://tools.learningcontainer.com/json-validator/) - JSON 형식이 유효한지 쉽게 확인할 수 있는 사이트
5. [다양한 온라인 툴](https://tools.learningcontainer.com/) - 이 외에 JSON 통신시에 데이터의 양을 줄여야 할때라는 등 다양한 JSON 관련 사이트
