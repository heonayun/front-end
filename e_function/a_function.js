// f(x) = 2x + 1
// function f(x) {
//     return 2 * x + 1;
// }

// let result = f(3) + 1;
// console.log(result);

// console.log(f(4));

// 두 정수의 곱셈을 구해주는 함수
// function multiply(number1, number2) {
//     return number1 * number2;
// }

// let result = multiply(3, 5);
// console.log(result);

// function add(number1, number2) {
//     return number1 + number2;
// }

// 디폴트 파라미터
// 필수로 받아야하는 매개변수가 아닌, 선택사항으로 받는 매개변수를 설정한다.
// 전달받은 값이 없을 경우 원하는 기본 값으로 설정된다.
// function add(number1, number2, number3 = 0) {
//     return number1 + number2 + number3;
// }

// const result = add(1, 2);
// console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본 값은 '익명'으로 설정한다.
function collectInfo(id, pw, nickname = "익명") {
    console.log(id);
    console.log(pw);
    console.log(nickname);
}
collectInfo("hny", "hny1");
