var nameInfo = document.order.billingName.value;
var tellInfo = document.order.billingTel.value;
var addrInfo = document.order.billingAddr.value;
var check = document.ship.shippingInfo;

check.addEventListener("click", function(){
    if(check.checked == true){
        document.ship.shippingName.value = nameInfo;
        document.ship.shippingTel.value = tellInfo;
        document.ship.shippingAddr.value = addrInfo;
    } else {
        document.ship.shippingName.value ="";
        document.ship.shippingTel.value="";
        document.ship.shippingAddr.value="";
    }
});
