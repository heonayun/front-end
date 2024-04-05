// 콜백함수의 목적은 분리이다.

// 이름을 전달받은 뒤 이름을 출력하는 서비스
// function setName(name, callback) {
//     // name에는 값이 들어오고, callback에는 함수(주소값)가 들어온다.
//     if (callback) {
//         // 만약 setName이 사용될 때, callback자리에 함수를 전달했다면,
//         // setName에서 받은 name(결과값)을 callback에 전달해준다.
//         callback(name);
//     }
// }

// printName 함수를 선언한다.
// function printName(name) {
//     console.log(name);
// }

// setName은 printName함수를 전달받은 뒤 사용해준다.
// 이 때, printName은 callback함수가 된다.
// setName의 목적과 printName의 목적은 다르다.
// 그래소 두 함수로 분리해서 마치 하나의 함수처럼 연결해준다.
// setName("허나윤", printName);

// 익명 함수
// 일회성으로 사용하고자 할 째 이름(식별자) 없이 선언한다.
// setName("허나윤", function (name) {
//     console.log(name);
// });

// 익명 함수는 화살표 => 함수하는 문법으로 선언이 가능하다.
// (매개변수, ...) => {실행할 문장; return 리턴값;}
// setName("허나윤", (name) => {
//     console.log(name);
// });

// 화살표 => 함수에 이름을 붙여서 사용한다.
// const printName = (name) => {
//     console.log(name);
// };

// 화살표 함수를 printName에 담았기 때문에, 그 함수를 그대로 setName에 전달한다.
// setName("허나윤", printName);

// 화살표 함수는 익명 함수이기 때문에,
// 나중에 다시 쓸거라면 이름을 붙여서 저장해 놓는다.
// const sayhello = () => {
//     console.log("안녕");
// };

// sayhello();

// 중괄호 안에 return 문장 밖에 없다.
// const add = (number1, number2) => {
//     return number1 + number2;
// };

// const result = add(1, 3);
// console.log(result);

// return만 작성할 거라면,
// 중괄호를 생략하고 바로 리턴값을 작성할 수 있다.
// const add = (number1, number2) => number1 + number2;
// console.log(add(1, 7));

// 매개변수로 전달받은 값을 즉시 다른 함수에 전달할 거라면,
// 굳이 직접 함수를 선언할 필요가 없다.
// setName("허나윤", (name) => {
//     console.log(name);
// });

// (name) => {console.log(name)};

// setName("허나윤", console.log);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력
function multiply(number1, number2, callback) {
    if (callback) {
        callback(number1 * number2);
    }
    return number1 * number2;
}

const result = multiply(2, 3);
console.log(result * 2);
