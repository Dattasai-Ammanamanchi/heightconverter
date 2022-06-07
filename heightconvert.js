let meter=document.getElementById("meter");
let foot=document.getElementById("foot");

meter.addEventListener("click",function(){
    let intt=document.getElementById("input").value;
    document.getElementById("output").value=intt/3.28084 + "meters";
    

})

foot.addEventListener("click",function(){
    var intt=document.getElementById("input").value;
    document.getElementById("output").value=intt*3.28084 + "foot";


})