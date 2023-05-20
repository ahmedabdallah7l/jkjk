var firstItem=document.querySelector("#firstItem")
var secondItem=document.querySelector("#secondItem")
var thirdItem=document.querySelector("#thirdItem")
var forthItem=document.querySelector("#forthItem")
var Product

if (localStorage.getItem("beeeb") != null) {
    Product = JSON.parse(localStorage.getItem("beeeb"));
  } else {
    Product = [];
  }

firstItem.addEventListener("click",()=>
{
    let item=
    {
        productImage:"../images/cart 1.png",
        productName:"Heritage Wool Handmade Kilim",
        productContent:`Our Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our Botanical collection. The motifs were designed by adapting the organic forms of various plants with geometrical, cultur-al, and folkloric motifs.Some of these were inspired by motifs from classic Persian which carry symbolic mean-ings. The artisans who made this product are making fair wages and preserving Egyptian cultural heritage by practicing a craft that has been passed down to them generation to generation. Purchasing this product allows us to continue our mission of reviving and susaining local crafts and empowering their communities.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x145`,
        productPrice:`880.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))
})

secondItem.addEventListener("click",()=>
{
    let item=
    {
        productImage:"../images/cart 2.png",
        productName:`Balochy Wool Handmade Kilim
        `,
        productContent:`Our  Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our geometric collection, so it was important that tribute was given to the traditional kilims that Assiut artisans were accus-tomed to crafting. The designs from this collection updated them by reducing the amount of colors used, as well as repeating the shapes to create more uniform patterns to add a sense of modernity. The artisans who made this product are making fair wages and preserving Egyptian cultural heritage by practicing a craft that has been passed down to them generation to generation.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x120`,
        productPrice:`570.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))
})

thirdItem.addEventListener("click",()=>
{
    let item=
    {
        productImage:"../images/cart 3.png",
        productName:`Hersyen Wool Handmade Kilim
        `,
        productContent:`Our  Kilim is hand-loomed Egyptian Wool which is all 100% handmade. A colorful Egyptian hung bright on famed French Artis Henri Matisse’s window. His love for textiles, and specifcally this design, a decorative col-lage of sewn together fragments of fabric. Which became icons of 20th century art through this collection of Kilims. The artisans who made this product are making fair wages and preserving Egyptian cultural heritage by practicing a craft that has been passed down to them generation to generation. Purchasing this product allows us to continue our mission of reviving and susaining local crafts.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x145`,
        productPrice:`795.00`
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))    
})

forthItem.addEventListener("click",()=>
{
    let item=
    {
        productImage:"../images/cart 4.png",
        productName:`Qashqai Wool Handmade Kilim
        `,
        productContent:`Our  Kilim is hand-loomed Egyptian Wool which is all 100% handmade. This piece comes from our upper Egypt collection which was made as a tribute to this region where our beloved village of Assiut is located. That is shaped like a triangle, for this reason the triangle was the main design element used in. The form was manipulated to create traditional motifs. Purchasing this product allows us to continue our mission of reviv-ing and susaining local crafts and empowering their communities. The artisans who made this product are making fair wages and preserving Egyptian cultural.
        `,
        productInstruction:`Dry clean - cold water hand wash - no dryer`,
        productSize:`70x135`,
        productPrice:`635.00 `
    }
    Product.push(item)
    localStorage.setItem("beeeb",JSON.stringify(Product))  
})