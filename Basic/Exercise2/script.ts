"use strict";

let myName = [{name1:"Ernie"},{name2:"Bert"}]
let out = document.querySelector(".res");

myName.forEach(function(name, index): any {
    let name1: string = name["name1"];
    let name2: string = name["name2"]; 
    for (let i: number = 0; i < 10; i++) {
        if (index == 0) {
            document.querySelector(".res").innerHTML += name1 + "<br>";
        } else {
            setTimeout(()=> document.querySelector(".res").innerHTML += name2 + "<br>", 5000);
       }  
    }      
});

//////////////////////////////////////////////////////////////
let myName2: Array<string> = ["Ernie", "Bert", "Samson"];
 
myName2.forEach((val) => {
    console.log(myName2[0]);  
});








