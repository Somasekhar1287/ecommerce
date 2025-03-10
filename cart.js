document.getElementById("shop-bag").addEventListener("click",function(){
    console.log("cart clicked");
    document.getElementById("cart-block").style.width="25%";
    document.getElementsByClassName("ecommerce-container")[0].style.width="75%";
});

document.getElementById("cart-close").addEventListener("click",function(){
    document.getElementById("cart-block").style.width="0%";
    document.getElementsByClassName("ecommerce-container")[0].style.width="100%";
});
