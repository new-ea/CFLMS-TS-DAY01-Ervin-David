"use strict";
var output = document.querySelector(".out");
document.write("<table border='1'>");
for (var i = 1; i < 11; i++) {
    document.write("<tr>");
    for (var y = 1; y < 11; y++) {
        var res = i * y;
        document.write("<td style='padding:10px'>" + res + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
