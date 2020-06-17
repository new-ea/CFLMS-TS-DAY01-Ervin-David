"use strict";

let out1: any = $("#content");
let out2: any = $("#content2");

let img: Array<string> = ["img/pizza.jpg", "img/hamburger.jpg", "img/sushi.jpg", "img/spaghett.jpg"];

const dishes: Array<string> = ["Pizza", "Hamburger", "Sushi", "Spaghetti"];
const [meal1,meal2,meal3,meal4] = dishes;

const price: Array<number> = [7.99, 14.99, 20.99, 4.99];
const [price1,price2,price3,price4] = price;

for (let i: number = 0; i < img.length; i++) {
    
    let test: string =
    `
    <div class="card card_box" style="width: 18rem">
        <img src="${img[i]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dishes[i]}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Order now: ${price[i]}€</a>
        <div class="likeBox">
            <p class="likeSymb">LIKE &#128077</p>
            <p class="likeCounter">0</p>
        </div>
        <div class="dislikeBox">
            <p class="dislikeSymb">LIKE &#128078;</p>
        </div>
    </div>
  </div>
    `;
  out1.append(test)
  out2.append(test)
}

    let likeBox: any = $(".likeBox");
    let likeCounter: any = $(".likeCounter");
    let dislikeCounter: any = $(".dislikeBox");
    
    for ( let i: number = 0; i < likeBox.length; i++) {
        let counter: number = 0;
        $(likeBox[i]).on("click" , function(){
            counter += 1;
            $(likeCounter[i]).text(counter);  
        })
        $(dislikeCounter[i]).on("click" , function(){
            counter -= 1;
            $(likeCounter[i]).text(counter);  
        })
    }



  