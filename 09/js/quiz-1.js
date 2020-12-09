var sideMenu = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
var totalPrice = 24000;
total.value = totalPrice + "원";

for(i = 0; i < sideMenu.length; i++){
    sideMenu[i].onclick = function(){
        if(this.checked == true){
            totalPrice += parseInt(this.value);
        } else{
            totalPrice -= parseInt(this.value);
        }
        total.value = totalPrice + "원";
    }
}