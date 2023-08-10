function fun1(){
    var year=Number(document.getElementById("input").value);
var output=document.getElementById("output");

if((year%4==0 &&year%100!=0)||year%400==0){
    output.innerHTML="Leap Year";
}

else{
    output.innerHTML="Not Leap Year";

}
}
