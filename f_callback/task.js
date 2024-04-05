// 두 정수의 덧셈 결과 출력
// function getNumber(number1, number2, callback) {
//     if (callback) {
//         callback(number1, number2);
//     }
// }

// const add = (number1, number2) => console.log(number1 + number2);

// getNumber(5, 7, add);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱하여 출력
// function multiply(number1, number2, callback) {
//     if (callback) {
//         return callback(number1 * number2);
//     }
//     return number1 * number2;
// }

// const double = (result) => {
//     return result * 2;
// };

// const aa = multiply(5, 2, double);
// console.log(aa);

// 성과 이름을 전달 받아서 풀네임을 만든 뒤 "000님" 출력
// 전달 예:"이","순신"
// 리턴 예:"이순신님"

// function getName(firstname, lastname, callback) {
//     if (callback) {
//         return callback(firstname + lastname);
//     }
//     return firstname + lastname;
// }

// const makeName = (fullName) => {
//     return `${fullName}님`;
// };

// const result = getName("허", "나윤", makeName);
// console.log(result);

// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false
// function getPrice(perPrice, totalPrice, callback) {
//     if (callback) {
//         return callback(totalPrice / perPrice);
//     }
//     return totalPrice / perPrice;
// }

// getPrice(600, 4000, (result) => console.log(result <= 5));

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "000원 결제 완료"
// 결제 상태가 false일 때 "000원 결제 취소" 출력

// 숙제
// 콜백 함수 문제 3개씩 만들어서 풀어보기
