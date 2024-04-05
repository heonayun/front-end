// 상품
// 상품번호, 상품명, 상품 가격, 상품을 구매한 회원

// 회원
// 회원번호, 아이디, 주소1, 주소2, 주소3

// 상품 전체 정보를 출력하고, 회원의 정보는 주소만 출력한다.

// let user = {
//     number: 2,
//     id: "허나윤",
//     address1: "서울시",
//     address2: "관악구",
//     address3: "봉천동",
// };

// let product = {
//     number: 1,
//     name: "가디건",
//     price: 78000,
//     user: user,
// };

// console.log(product);

// product.printInfo = () => {
//     for (let i = 0; i < 3; i++) {
//         console.log(product.user[`address${i + 1}`]);
//     }
// };

// product.printInfo();

/*********************************************/
// 게시글
// 번호, 제목, 내용

// 후기
// 번호, 내용, 별점(0~5)
// let post = {
//     number: 1,
//     name: "title",
//     content: "내용",
// };

// let review = {
//     number: 3,
//     content: "후기 내용",
//     like: 4,
//     post: post,
// };

// console.log(review.post.number);

/*********************************************/
// 회원
// 번호, 이름

// 프로필 사진
// 번호, 경로(2024/3/11/a.png)
// let user = {
//     id: 1,
//     name: "허나윤",
// };

// let profile = {
//     number: 4,
//     // 경로는 문자열로 입력한다.
//     path: "2024/3/11/a.png",
//     user: user,
// };

// console.log(profile.user.id);
// const fullPath = `upload/${profile.path}`;
// console.log(fullPath);

/*********************************************/
// 회원
// 번호, 이름

// 게시글
// 번호, 제목, 내용

// 좋아요
// 번호
// let user = {
//     number: 3,
//     id: "허나윤",
// };

// let post = {
//     number: 2,
//     title: "게시글2",
//     content: "게시글 내용2",
//     user: user,
// };

// let like = {
//     number: 5,
//     user: user,
//     post: post,
// };

// console.log(like.user.id);
// console.log(post.user.number);
