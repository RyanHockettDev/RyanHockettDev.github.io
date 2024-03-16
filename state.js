let body = document.getElementById("body");

let resourceLink = document.getElementById("resources");
let footer = document.getElementById("footer");

resourceLink.addEventListener("click", () => {
    footer.scrollIntoView({behavior: "smooth"});
})

if (body.classList.contains("form")){
    let email = document.getElementById("email");
    let confirmation = document.getElementById("confirmation");
    let confirmEmail = document.getElementById("confirmEmail");

    confirmEmail.addEventListener("keyup", () => {
        if (confirmEmail.value == email.value){
            confirmation.innerHTML = "Exact match!";
            confirmation.style.color = "rgb(1, 170, 1)";
        } else {
            confirmation.innerHTML = "These don't match!";
        }
        })
    let question = document.getElementById("question");
    let charCount = document.getElementById("charCount");

    question.addEventListener("keyup", () => {
        i = question.value.length;  
        charCount.innerHTML = i + "/600";
    })
}

if (body.classList.contains("joplin")) {
    let slideIndex = 0;
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex+= 1;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000);
      }
    showSlides();
}
