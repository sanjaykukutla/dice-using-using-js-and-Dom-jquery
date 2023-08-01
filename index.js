var randnum1 = Math.floor(Math.random()*5)+1;
var randnum2 = Math.floor(Math.random()*5)+1;

var randimgsrc = "images/dice"+randnum1+".png";
var randimgsrc2 = "images/dice"+randnum2+".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randimgsrc);
image2.setAttribute("src",randimgsrc2);

if(randnum1>randnum2){
    document.querySelector("h1").innerText = "player 1 wins"
}else if(randnum1<randnum2){
    document.querySelector("h1").innerText = "player 2 wins"
}else if(randnum1==randnum2){
    document.querySelector("h1").innerText = "Draw"
}