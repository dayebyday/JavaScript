var userId = document.querySelector("#user-id");
var userPw1 = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
userPw1.addEventListener("change", check);
userPw2.onchange = comparePw;

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자로 입력하세요.");
        userId.select();
    }
}

function check(){
    if(userPw1.value.length < 8){
        alert("8자리 이상의 영문과 숫자로 입력하세요.");
        userPw1.value = "";
        userPw1.focus();
    }
}

function comparePw(){
    if(userPw1.value != userPw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        userPw2.value = "";
        userPw2.focus();
    }
}