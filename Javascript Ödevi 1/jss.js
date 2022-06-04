let name = prompt("Please enter your name",);
let userName=document.querySelector(".myName");
userName.innerHTML=name;

var KRONII = document.getElementById('KRONII');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  KRONII.textContent =
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

function showDay() {
    let today = document.querySelector('.TODAY');
    let dte = new Date();
    let gun = dte.getDay();

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
    today.innerHTML = `${gun}` // Saati dakikayı ve günü yazdırdığım yer

}
showDay();
