"use strict";

let myName = [{name1:"Ernie"},{name2:"Bert"}]
let out = document.querySelector(".res");
let res = document.querySelector(".out");
let res2 = document.querySelector(".out2");
let res3 = document.querySelector(".out3");

myName.forEach(function(name, index): any {
    let name1: string = name["name1"];
    let name2: string = name["name2"]; 
    for (let i: number = 0; i < 10; i++) {
        if (index == 0) {
            out.innerHTML += name1 + "<br>";
        } else {
            setTimeout(()=> out.innerHTML += name2 + "<br>", 5000);
       }  
    }      
});

//////////////////////////////////////////////////////////////
let myName2: Array<string> = ["Ernie", "Bert", "Samson"];
 
myName2.forEach((val) => {
    console.log(val);  
});

/////////////////////////////////////////////////////////////
let myName3: Array<string> = ["Ernie", "Bert", "Samson", "Marie", "Jeff", "Susan", "Steve"];

// 1: Print only the index of the elements.(ForIn)
res.innerHTML = "<hr>"
for (let index in myName3) {
    res.innerHTML += index + "<br>";
};

// 2. Print only the values. (ForOf)
res2.innerHTML = "<hr>"
for (let value of myName3) {
    res2.innerHTML += value + "<br>";
 }

//  3. Print both index and values(ForIn)
res3.innerHTML = "<hr>"
myName3.forEach(function(name, index): any {
    res3.innerHTML += index + ":" + name + "<br>";          
});




