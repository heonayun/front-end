// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기

// Array.prototype.set1To5 = function () {
//     for (let i = 0; i < 5; i++) {
//         datas[i] = i + 1;
//     }
// };
// let datas = [];
// datas.set1To5();
// console.log(datas);

// for (i = 0; i < datas.length; i++) {
//     console.log(datas[i] + 5);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)를 ":"으로 연결하여 출력한다.

// let datas = [];

// Array.prototype.set2To10 = function () {
//     for (let i = 0; i < 5; i++) {
//         datas[i] = (i + 1) * 2;
//     }
// };
// datas.set2To10();
// console.log(datas);

// const result = datas.join(":");
// console.log(result);

/************************************/

// datas.connect = function () {
//     console.log(":으로 연결");
//     return this.join(":");
// };

// const result = datas.connect();
// console.log(result);

/************************************/
// Array.prototype.set1To10 = function () {
//     for (let i = 0; i < 10; i++) {
//         datas[i] = i + 1;
//     }
// };
// let datas = [];
// datas.set1To10();
// console.log(datas);

// for (let data of datas) {
//     //조건문으로 참일때 실행되는 구조이다.
//     //리턴값이 true 또는 false로 나타나기 때문에
//     //해당 구조의 리턴값을 사용할 수 없다.
//     data % 2 == 0 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.

// let datas = [];

// Array.prototype.set1To10 = function () {
//     for (let i = 0; i < 10; i++) {
//         datas[i] = i + 1;
//     }
// };

// datas.set1To10();
// console.log(datas);

// let datasSliced = datas.slice(1);

// console.log(datasSliced);

// for (let data of datasSliced) {
//     data % 2 == 1 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.

// let datas = [];

// for (i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }

// console.log(datas);

// for (let i in datas) {
//     datas[i] % 2 == 0 && datas.splice(i, 1);
// }

// console.log(datas);

/************************************/

// for (let i = 0; i < 5; i++) {
//     datas.splice(i + 1, 1);
// }
// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기

// let datas = [];
// for (i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);

// for (let i in datas) {
//     i % 2 == 0 && datas.splice(i, 1, datas[i] - 2);
// }

// console.log(datas);

// 회원 정보
// 번호, 이름, 나이
// 1, user1, 18
// 2, user2, 19
// 3, user3, 20
// 회원 목록 중 회원 이름만 출력
// 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력

// function User(number, name, age) {
//     this.number = number;
//     this.name = name;
//     this.age = age;
// }

// let user = [];

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기

// let datas = [];
// function set1To5() {
//     for (let i = 0; i < 5; i++) {
//         datas[i] = i + 1;
//     }
// }
// set1To5();
// // console.log(datas);

// for (let i = 0; i < datas.length; i++) {
//     console.log(datas[i] + 5);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)를 ":"으로 연결하여 출력한다.
// let datas = [];
// for (let i = 0; i < 5; i++) {
//     datas[i] = (i + 1) * 2;
// }
// console.log(datas);
// const result = datas.join(":");
// console.log(result);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.

// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);

// datas = datas.slice(1);
// console.log(datas);

// for (let data of datas) {
//     data % 2 == 1 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);

// for (let data of datas) {
//     if (data % 2 == 1) {
//         console.log(data);
//     }
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// console.log(datas);

// for (let data of datas) {
//     if (data % 2 == 1) {
//         console.log(data - 2);
//     }
// }

// 회원 정보
// 번호, 이름, 나이
// 1, user1, 18
// 2, user2, 19
// 3, user3, 20
// 회원 목록 중 회원 이름만 출력
// 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력
// function User(number, name, age) {
//     this.number = number;
//     this.name = name;
//     this.age = age;
// }

// let users = [];

// for (let i = 0; i < 3; i++) {
//     users.push(new User(i + 1, `user${i + 1}`, 18 + i));
// }

// users.forEach((user) => {
//     console.log(user.name);
// });

// users
//     .filter((user) => user.age >= 20)
//     .forEach((user) => {
//         console.log(`${user.number}. ${user.name}: ${user.age}살`);
//     });

// 상품 정보
// 번호, 상품명, 가격, 구매 회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2

// 1~100까지의 합

let numbers = new Array(100).fill(0);
numbers.map((_, i) => {
    return (numbers[i] = i + 1);
});
console.log(numbers);

const result = numbers.reduce((total, number) => {
    return total + number;
});

console.log(result);
