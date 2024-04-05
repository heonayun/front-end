/*
    if문

    if(조건식){실행할 문장;}
    // 위의 조건식 결과에 상관 없이 무조건 검사
    if(조건식){실행할 문장;}
    ...

    if(조건식) {실행할 문장;}
    // 위의 조건식이 true가 아니면 검사한다.
    else if(조건식) {실행할 문장;}
    else if(조건식) {실행할 문장;}
    ...
    }else{실행할 문장;}

*/
let firstnumber = 20;
let lastnumber = 20;

if (firstnumber > lastnumber) {
    console.log(`${firstnumber}이(가) 더 큰 값`);
} else if (firstnumber !== lastnumber) {
    console.log(`${lastnumber}이(가) 더 큰 값`);
} else {
    console.log(`두 수가 같다`);
}
