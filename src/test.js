// JSON 형식의 문자열
let json = '{"name":"tori","color":"white","size":null,"birthDate":"2020-09-03T13:00:34.454Z"}';    
let obj = JSON.parse(json, (key, value, any) => {
    console.log(`key: ${key}, value: ${value}, any: ${any}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);