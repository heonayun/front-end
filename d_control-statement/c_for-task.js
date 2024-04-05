// 시작 인덱스(i)값은 0으로 설정한다.

// 1~100까지 출력
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

// 100~1까지 출력
// 0~99
// 100 - 0~99
// for (let i = 0; i < 100; i++) {
//     console.log(100 - i);
// }

// 1~100까지 중 짝수만 출력
// 50번 반복 (100번 돌리는것보다 50번 돌리는게 더 성능이 좋다)
// 0~49
// 1~50
// 2~100
// for (i = 0; i < 100; i = i + 2) {
//     console.log(i + 2);
// }
// for (let i = 0; i < 50; i++) {
//     console.log((i + 1) * 2);
// }

// 1 ~ count까지 합 출력
// let count = 100;
// let total = 0;

// for (i = 0; i < count; i++) {
//     // total = total + i + 1;
//     total += i + 1;
// }
// console.log(total);

//  0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 출력
// (i + 5) % 5
// for (let i = 0; i < 15; i++) {
//     console.log((i + 5) % 5);
// }

// let result = "";
// for (let i = 0; i < 15; i++) {
//     // console.log(i % 5);
//     result += `${i % 5} `;
// }
// console.log(result);

// 1~10까지 5를 제외하고 출력
// for (let i = 0; i < 9; i++) {
//     console.log(i > 3 ? i + 2 : i + 1);
// }

// break: 즉시 영역 탈출
// 1~10까지 중 5까지만 출력
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
//     if (i == 4) {
//         break;
//     }
// }

// continue: 다음 반복으로 넘어가기, 아래 있는 코드를 실행하고 싶지 않을 때
// 1~10까지 5를 제외하고 출력
// for (let i = 0; i < 10; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log(i + 1);
// }
