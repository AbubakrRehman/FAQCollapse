const faq__container = document.getElementById("faq__container");
const faq__toggles = document.querySelectorAll(".faq__toggle");


faq__toggles.forEach(faq__toggle => {
    faq__toggle.addEventListener("click", (e) => {
        faq__toggle.parentNode.classList.toggle("active");
    })
});


// faq__container.addEventListener("click", (e) => {
//     console.log("inside faq___container");
//     console.log("test", e.target);
//     if (e.target.classList.contains("toggle")) {
//         e.target.parentNode.classList.toggle("active");
//     }
// })


