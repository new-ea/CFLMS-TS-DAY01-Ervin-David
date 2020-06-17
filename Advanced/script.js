"use strict";
var out1 = $("#content");
var out2 = $("#content2");
var img = ["img/pizza.jpg", "img/hamburger.jpg", "img/sushi.jpg", "img/spaghett.jpg"];
var dishes = ["Pizza", "Hamburger", "Sushi", "Spaghetti"];
var meal1 = dishes[0], meal2 = dishes[1], meal3 = dishes[2], meal4 = dishes[3];
var price = [7.99, 14.99, 20.99, 4.99];
var price1 = price[0], price2 = price[1], price3 = price[2], price4 = price[3];
for (var i = 0; i < img.length; i++) {
    var test = "\n    <div class=\"card card_box\" style=\"width: 18rem\">\n        <img src=\"" + img[i] + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + dishes[i] + "</h5>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Order now: " + price[i] + "\u20AC</a>\n        <div class=\"likeBox\">\n            <p class=\"likeSymb\">LIKE &#128077</p>\n            <p class=\"likeCounter\">0</p>\n        </div>\n        <div class=\"dislikeBox\">\n            <p class=\"dislikeSymb\">LIKE &#128078;</p>\n        </div>\n    </div>\n  </div>\n    ";
    out1.append(test);
    out2.append(test);
}
var likeBox = $(".likeBox");
var likeCounter = $(".likeCounter");
var dislikeCounter = $(".dislikeBox");
var _loop_1 = function (i) {
    var counter = 0;
    $(likeBox[i]).on("click", function () {
        counter += 1;
        $(likeCounter[i]).text(counter);
    });
    $(dislikeCounter[i]).on("click", function () {
        counter -= 1;
        $(likeCounter[i]).text(counter);
    });
};
for (var i = 0; i < likeBox.length; i++) {
    _loop_1(i);
}
