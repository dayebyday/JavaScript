//텍스트 필드의 이름을 가져와 명단에 추가
function newRegister() {
    var newP = document.createElement("p");  //새로 생성된 p태그
    var newName = document.querySelector("#userName");
    var newText = document.createTextNode(newName.value);
    newP.appendChild(newText);

    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);
    
    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    newName.value = "";

    var removeBttns = document.querySelectorAll(".del");  //접근
    for(var i = 0; i < removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
    

}










