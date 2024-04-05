// 상품
// 상품번호, 상품명, 상품 가격, 상품을 구매한 회원

// 회원
// 회원번호, 아이디, 주소1, 주소2, 주소3

// 상품 전체 정보를 출력하고, 회원의 정보는 주소만 출력한다.

let user = {
    number: "123",
    id: "hny",
    address1: "주소1",
    address2: "주소2",
    address3: "주소3",
};

let product = {
    number: "1",
    name: "사탕",
    price: "200",
    user: user,
    // 메소드와 함수의 차이
    // 메소드는 영역 안에서 선언된다.
    // 함수는 영역 안에 있지 않고 밖에 선언된다.

    printInfo: () => {
        console.log(product.number, product.name, product.price);
    },
    printAdress: () => {
        for (let i = 0; i < 3; i++) {
            console.log(product.user[`address${i + 1}`]);
        }
    },
};

// console.log(product.number);
// console.log(product.name);
// console.log(product.price);
product.printInfo();

// for (let i = 0; i < 3; i++) {
//     console.log(user[`adress${i + 1}`]);
// }
// product.printAdress();

// 수정: 기존에 있는 key 값에 새로운 값을 넣는다.
product.name = "껌";
product.printInfo();

// 추가: 기존에 없는 key 값에 값을 넣는다.
// product.printInfo = () => {
//     console.log(product.number, product.name, product.price);
// };

// product.printInfo();
