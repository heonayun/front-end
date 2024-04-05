// 1~10까지 출력하는 함수
// function printFrom1To10() {
//     for (i = 0; i < 10; i++) {
//         console.log(i + 1);
//     }
// }

// printFrom1To10();

// "홍길동"을 n번 출력하는 함수
// function printHong(count) {
//     let name = "홍길동";
//     for (let i = 0; i < count; i++) {
//         console.log(name);
//     }
// }

// printHong(10);

// 이름을 n번 출력하는 함수
// function printName(name, number) {
//     for (i = 0; i < number; i++) {
//         console.log(name);
//     }
// }
// printName("허나윤", 5);

// 짝수를 홀수로 홀수를 짝수로 변환
// function change(number) {
//     return number % 2 === 0 ? "홀수" : "짝수";
// }

// const result = change(5);
// console.log(result);

function change(number) {
    return ++number;
}

const result = change(10);
const message = result % 2 == 0 ? "짝수" : "홀수";
console.log(message);
// if (result % 2 == 0) {
//     console.log("짝수");
// } else {
//     console.log("홀수");
// }
