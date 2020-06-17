"use strict";
var myName = [{ name1: "Ernie" }, { name2: "Bert" }];
var out = document.querySelector(".res");
myName.forEach(function (name, index) {
    var name1 = name["name1"];
    var name2 = name["name2"];
    for (var i = 0; i < 10; i++) {
        if (index == 0) {
            document.querySelector(".res").innerHTML += name1 + "<br>";
        }
        else {
            setTimeout(function () { return document.querySelector(".res").innerHTML += name2 + "<br>"; }, 5000);
        }
    }
});
//////////////////////////////////////////////////////////////
var myName2 = ["Ernie", "Bert", "Samson"];
myName2.forEach(function (val) {
    console.log(myName2[0]);
});
