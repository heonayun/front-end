// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기

// let datas = [1, 2, 3, 4, 5];
// console.log(datas[0] + 5);
// console.log(datas[1] + 5);
// console.log(datas[2] + 5);
// console.log(datas[3] + 5);
// console.log(datas[4] + 5);

// let datas = [];
// // 값을 넣는 부분
// for (let i = 0; i < 5; i++) {
//     // datas[i] = i + 1;
//     datas.push(i + 1);
// }

// // 값을 사용하는 부분
// for (let i = 0; i < datas.length; i++) {
//     console.log(datas[i] + 5);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)를 ":"으로 연결하여 출력한다.

// let datas = [];
// for (i = 0; i < 5; i++) {
//     datas[i] = (i + 1) * 2;
// }

// console.log(datas);
// console.log(datas.join(":"));

// let datas = [];
// datas.concatenate = function () {
//     console.log(":으로 연결");
//     return this.join(":");
// };

// for (let i = 0; i < 5; i++) {
//     datas[i] = (i + 1) * 2;
// }

// const result = datas.concatenate();
// console.log(result);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.

// let datas = [];
// for (i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// let datasSliced = datas.slice(1);

// for (let data of datasSliced) {
//     // if (data % 2 == 1) {
//     //     console.log(data);
//     // }
//     data % 2 == 1 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }

// for (let i in datas) {
//     if (datas[i] % 2 == 0) {
//         datas.splice(i, 1);
//     }
// }
// console.log(datas);

// datas.splice(1, 1);
// datas.splice(2, 1);
// datas.splice(3, 1);
// datas.splice(4, 1);
// datas.splice(5, 1);

// console.log(datas);

// for (let i = 0; i < 5; i++) {
//     datas.splice(i + 1, 1);
// }

// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기

// Array.prototype.setFrom1To10 = function () {
//     for (let i = 0; i < 10; i++) {
//         this[i] = i + 1;
//     }
// };

// let datas = [];
// datas.setFrom1To10();

// console.log(datas);

// 1 2 3 4 5 6 7 8 9 10
// 0   2   4   6   8

// datas.splice(0, 1, -1);
// datas.splice(2, 1, 1);
// datas.splice(4, 1, 3);
// datas.splice(6, 1, 5);
// datas.splice(8, 1, 7);
// console.log(datas);

// for (let i = 0; i < 5; i++) {
//     datas.splice(2 * i, 1, 2 * [i] - 1);
// }
// console.log(datas);

// for (let i in datas) {
//     // if (i % 2 == 0) {
//     //     datas.splice(i, 1, datas[i] - 2);
//     // }
//     i % 2 == 0 && datas.splice(i, 1, datas[i] - 2);
// }

// console.log(datas);

// 회원 정보
// 번호, 이름, 나이
// 1, user1, 18
// 2, user2, 19
// 3, user3, 20

function User(number, name, age) {
    this.number = number;
    this.name = name;
    this.age = age;
}

let users = [];

for (let i = 0; i < 3; i++) {
    users.push(new User(i + 1, `user${i + 1}`, 18 + i));
}

// // 회원 목록 중 회원 이름만 출력
// users.forEach((user) => {
//     console.log(user.name);
// });

// // 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 출력
// users
//     .filter((user) => user.age >= 20)
//     .forEach((user) => {
//         console.log(`${user.number}. ${user.name}: ${user.age}살`);
//     });

// 상품 정보
// 번호, 상품명, 가격, 구매 회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2
function Product(number, name, price, user) {
    this.number = number;
    this.name = name;
    this.price = price;
    this.user = user;
}

let products = [
    new Product(3, "상품1", 3000, users[0]),
    new Product(8, "상품3", 1000, users[1]),
];

// 상품 목록을, 상품을 구매한 구매 회원의 목록으로 변경한다.
let buyers = products.map((product) => product.user);

// 구매자의 전체 정보를 출력한다.
buyers.forEach((buyer) => {
    console.log(`${buyer.number}. ${buyer.name}: ${buyer.age}살`);
});

// 1~100까지 합 출력
// let numbers = new Array(100).fill(0).map((_, i) => i + 1);
// const total = numbers.reduce((total, number) => total + number);
// console.log(total);

// console.log(numbers);
