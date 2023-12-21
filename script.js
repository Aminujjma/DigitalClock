let a
let Time
let date
setInterval(()=>{


const option= { weekday:"long", year:"numeric", month:"short", day:"numeric"};
a= new Date();
Time= a.getHours() + ":" + a.getMinutes() + ":" +a.getSeconds();
date= a.toLocaleDateString(undefined,option);
document.getElementById("time").innerHTML = time+ " on <br>  "+ date;
},10)
