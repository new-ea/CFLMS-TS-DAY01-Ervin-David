"use strict";
var myName = [{ name1: "Ernie" }, { name2: "Bert" }];
var out = document.querySelector(".res");
var res = document.querySelector(".out");
var res2 = document.querySelector(".out2");
var res3 = document.querySelector(".out3");
myName.forEach(function (name, index) {
    var name1 = name["name1"];
    var name2 = name["name2"];
    for (var i = 0; i < 10; i++) {
        if (index == 0) {
            out.innerHTML += name1 + "<br>";
        }
        else {
            setTimeout(function () { return out.innerHTML += name2 + "<br>"; }, 5000);
        }
    }
});
//////////////////////////////////////////////////////////////
var myName2 = ["Ernie", "Bert", "Samson"];
myName2.forEach(function (val) {
    console.log(val);
});
/////////////////////////////////////////////////////////////
var myName3 = ["Ernie", "Bert", "Samson", "Marie", "Jeff", "Susan", "Steve"];
// 1: Print only the index of the elements.(ForIn)
res.innerHTML = "<hr>";
for (var index in myName3) {
    res.innerHTML += index + "<br>";
}
;
// 2. Print only the values. (ForOf)
res2.innerHTML = "<hr>";
for (var _i = 0, myName3_1 = myName3; _i < myName3_1.length; _i++) {
    var value = myName3_1[_i];
    res2.innerHTML += value + "<br>";
}
//  3. Print both index and values(ForIn)
res3.innerHTML = "<hr>";
myName3.forEach(function (name, index) {
    res3.innerHTML += index + ":" + name + "<br>";
});
