// 두 정수의 덧셈 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return number1 + number2;
//     }
// };

// add(1, 4, (result) => {
//     console.log(result);
// });

// add(1, 2, console.log);

// 두 정수의 덧셈 결과 출력
// function add(number1, number2, callback) {
//     if (callback) {
//         return callback(number1, number2);
//     }
// }

// function printNumber(number1, number2) {
//     return number1 + number2;
// }

// const result = add(1, 4, printNumber);
// console.log(result);

// const printNumber = (number1, number2) => number1 + number2;
// const result = add(1, 6, printNumber);
// console.log(result);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력
// 1. 두 정수의 곱셈을 구함
// 2. 결과에 2를 곱한 뒤 출력
// function multiply(number1, number2, callback) {
//     if (callback) return callback(number1 * number2);
//     return number1 * number2;
// }
// const multiply2 = (result) => {
//     return result * 2;
// };

// const result = multiply(3, 4, multiply2);
// console.log(result);

// function multiply(number1, number2, callback) {
//     if (callback) return callback(number1 * number2);
//     return number1 * number2;
// }

// const result = multiply(4, 5, (result) => result * 2);
// console.log(result);

// 성과 이름을 전달 받아서 풀네임을 만든 뒤 "000님" 출력
// 전달 예: "이", "순신"
// 리턴 예: "이순신님"

// const printName = (firstname, lastname, callback) => {
//     if (callback) {
//         return callback(firstname + lastname);
//     }
//     return firstname + lastname;
// };

// const result = printName("허", "나윤", (fullName) => {
//     return `${fullName}님`;
// });

// console.log(result);

// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false
// const getCount = (perPrice, totalPrice, callback) => {
//     if (callback) {
//         return callback(totalPrice / perPrice);
//     }
//     return totalPrice / perPrice;
// };

// const result = getCount(500, 700, (count) => count <= 5);
// console.log(result);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "000원 결제 완료"
// 결제 상태가 false일 때 "000원 결제 취소" 출력

const printPay = (payPrice, payStatus, callback) => {
    if (callback) {
        callback(
            payStatus ? `${payPrice}원 결제 완료` : `${payPrice}원 결제 취소`
        );
    }
};

printPay(500, true, (message) => {
    console.log(message);
});
