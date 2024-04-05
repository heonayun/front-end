// 회원
// 번호, 이름

// 프로필 사진(사진은 어떠한 지점에서 저장이 되며,
// 저장공간의 경로로 기록이 된다.)
// 번호, 경로(2024/02/13/a.png)

let user = {
    id: 1,
    name: "허나윤",
};

let profile = {
    id: 12,
    path: "2024/02/13/a.png",
    user: user,
};

console.log(profile.user.name);
const fullPath = `upload/${profile.path}`;
console.log(fullPath);
