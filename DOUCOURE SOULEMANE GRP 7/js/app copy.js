let button = document.querySelector("#button");
console.log(button);
button.addEventListener("click", function() {

    console.log("click");

    let menuDeroulant = document.querySelector("#menu-deroulant");
    menuDeroulant.classList.toggle("open");
})