// URL: 경로
// URI: URL에서 IP와 포트번호를 제외한 나머지

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log(post.title);
    });

// response 응답 전용 객체
// 작업을 하려면 데이터가 필요하기때문에 response.json으로 데이터 불러오기
// json 은 key값에 ""(문자열)가 들어감
// response.json

// let user = { id: 3, name: "허나윤" };
// console.log(user);
// console.log(JSON.stringify(user));

// const json_data = JSON.stringify(user);
// const object = JSON.parse(json_data);
// console.log(object.name);
