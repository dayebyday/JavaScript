var radius = document.querySelector("#radius");
var bttn = document.querySelector("#start");

bttn.addEventListener("click", function(){
    document.querySelector("#round").value = Math.PI * 2 * Number(radius.value);
    document.querySelector("#area").value = Math.PI * Number(radius.value) * Number(radius.value);
})
