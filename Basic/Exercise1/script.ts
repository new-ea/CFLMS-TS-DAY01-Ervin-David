"use strict";
let output: any = document.querySelector(".out");

document.write("<table border='1'>")
for (let i: number = 1; i < 11; i++) {
    document.write("<tr>")
    for (let y: number = 1; y < 11; y++) {
        let res : number = i * y;
        document.write(`<td style='padding:10px'>${res}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")
