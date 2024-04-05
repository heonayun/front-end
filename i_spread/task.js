// B파일
// productComponent라는 함수 선언 후 상품 정보 받기
const productComponent = (product) => {
    const { id, name, price, discountPercent } = product;

    console.log(id, name, price, discountPercent);
};

// A파일
// 상품
// 번호, 상품명, 가격, 할인율
let product = { id: 2, name: "닭발", price: 13000, discountPercent: 15 };

productComponent(product);

// B 파일
// categoryComponent라는 함수 선언 후 카테고리 정보 받기
// 이름을 다른 이름으로 변경해서 리턴하기
// const categoryComponent = (category) => {
//     const { id, name } = category;
//     return {
//         ...category,
//         name: "여름",
//     };
// };

// // A 파일
// // 카테고리
// // 번호, 이름
// let category = { id: 2, name: "봄" };
// category = categoryComponent(category);

// // 변경된 카테고리 이름 출력하기
// console.log(category.name);
