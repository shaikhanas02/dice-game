let button1 = document.querySelector(".button1") ;
let button2 = document.querySelector(".button2") ; 
let img = document.getElementsByTagName("img")[0] ;
let player1Score = 0;
let player2Score = 0;
let chance1 = 0;
let chance2 = 5;
 button1.addEventListener("click" , press1 ) ;


 function press1(){
    console.log(1);
    let a  = Math.floor(Math.random()*6)+ 1 ;

    player1Score +=a;
document.getElementById("player1").innerHTML = player1Score ;
chance1++;
 }

   
 button2.addEventListener("click" , press2 ) ;
 function press2(){
    let a  = Math.floor(Math.random()*6)+ 1 ;
    player2Score+= a;
document.getElementById("player2").innerHTML = player2Score ;
chance2--;
 }
