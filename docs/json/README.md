---
title: JSON 이란?
---

## JSON 소개
JSON(JavaScript Object Notaion)은 자바스크립트 객체 표기법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷 입니다.
JSON은 주로 클라이언트에서 서버로 데이터를 전송하거나 반대로 서버에서 클라이언트로 데이터를 전송할 때 사용합니다. 또한 JSON은 브라우저 뿐만 아니라 모바일과 서버간 통신 또는 파일에 데이터를 저장할 때에도 JSON 데이터 타입을 많이 이용하고 있습니다.

## JSON 특징
- 데이터를 주고 받을 때 사용하는 가장 **간단한 데이터 포맷**
- **텍스트를 기반**으로한 경량의 구조
- 가독성이 좋아 **읽기 쉽다**
- `key`와 `value`로 구성되어있다
- 데이터를 주고 받을 때 데이터는 직렬화 하기위해 사용한다
- **프로그래밍 언어나 플랫폼에 상관없이** 사용할 수 있다

## JSON 구조
위 에서 설명 했던 것 처럼 JSON은 `key`와 `value`로 구성되어있습니다. 그리고 `value`에는 문자열, 숫자, 배열, 불리언 그리고 객체를 포함할 수 있습니다.
```json
{
    "squadName": "Super hero squad",
    "formed": 2016,
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Superhuman reflexes"
            ]
        }
    ]
}
```
