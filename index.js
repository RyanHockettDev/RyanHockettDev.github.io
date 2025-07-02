
setTimeout(function(){
    let neonText = document.querySelectorAll("p");
    neonText.forEach(element => {
        element.classList.add("neonText")
    })
    let neonLink = document.querySelectorAll("a");
    neonLink.forEach(element=> {
        element.classList.add("neonText")
    })
    document.body.style.backgroundImage = "url(blueWall.jpg)";

}, 1000);