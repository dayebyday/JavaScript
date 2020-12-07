function newRegister() {
    // 요소 노드 생성 및 텍스트 노드 생성
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
    //nameList.appendChild(newP);                            //새로 추가하는 자식 노드를 기존 자식 노드보다 뒤에 추가됨
    nameList.insertBefore(newP, nameList.childNodes[0]);     //최근에 입력한 이름을 명단 맨 위에 표시
    userName.value = "";                                     //다음 입력을 위해 텍스트필드 비워주기

    var removeBttns = document.querySelectorAll(".del");
    for(var i = 0; i < removeBttns.length; i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);     //'현재 노드(this)의 부모 노드와 부모 노트'를 찾아 '현재 노트(this)의 부모 노드(p 노드)' 삭제
            }
        })
    }
}