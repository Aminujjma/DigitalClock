let a
let time
let date
setInterval(()=>{


const option= { weekday:"long", year:"numeric", month:"short", day:"numeric"};
a= new Date();
time= a.getHours() + ":" + a.getMinutes() + ":" +a.getSeconds();
date= a.toLocaleDateString(undefined,option);
document.getElementById("time").innerHTML = time+ " on <br>  "+ date;
},10)