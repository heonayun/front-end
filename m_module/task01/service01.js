// 회원 관련 서비스 모듈
const userService = (() => {
    // 첫 번째 메소드 , 비동기 메소드
    const findAll = async (callback) => {
        // callback을 전달받는다.
        // 저 경로로 요청한다.
        // 요청에 맞는 응답을 response에 담는다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/"
        );
        // 내가 필요한 데이터를 json()으로 가져온다.
        const users = await response.json();
        // 데이터를 callback에 전달한다
        if (callback) {
            callback(users);
        }
    };
    // 두 번째 메소드
    const findById = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { findAll: findAll, findById: findById };
})();
