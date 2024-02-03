let form = document.querySelector("#my-form");
let firstName = document.querySelector("#firstName"); // input firstName
let lastName = document.querySelector("#lastName"); // input lastName
let age = document.querySelector("#age"); // input age
let country = document.querySelector("#country"); // select country
let errors = document.getElementById("errors");
let body = document.querySelector("body")
let nul = document.querySelector("nul")
let adresse = document.getElementById("Adresse")
let ville = document.getElementById("Ville")


form.addEventListener("submit", function (event) {


    event.preventDefault();
    errors.innerHTML = ""

    if (!email.value.includes("@")) {       /*S'il "@" n'apparaît pas dans le champ =erreur */
        email.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner une adresse email valide.</div>";
    } else {
        email.style.backgroundColor = "green";
    }

    if (firstName.value.length < 2) {
        firstName.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner un prénom avec 2 caractères minimum. </div>";
    } else {
        firstName.style.backgroundColor = "green";
    }

    if (lastName.value.length < 2) {
        lastName.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
    } else {
        lastName.style.backgroundColor = "green";
    }

    if (adresse.value.length < 2) {
        adresse.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner une adresse valide. </div>";
    } else {
        adresse.style.backgroundColor = "green";
    }


    if (Ville.value.length < 2) {
        Ville.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner une ville valide. </div>";
    } else {
        Ville.style.backgroundColor = "green";
    }



    if (Codepostal.value.length < 5) {
        Codepostal.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner un code postal valide. </div>";
    } else {
        Codepostal.style.backgroundColor = "green";
    }

    if (password.value.length < 6) {
        password.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner un mot de passe valide. </div>";
    } else {
        password.style.backgroundColor = "green";
    }

    if (rpassword.value.length < 6) {
        rpassword.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez renseigner un mot de passe valide. </div>";
    } else {
        rpassword.style.backgroundColor = "green";
    }

    if (password!= rpassword) {
        rpassword.style.backgroundColor = "green";
        errors.innerHTML += "<div> Les mots de passe ne sont pas identiques. </div>";
    } else {
    } rpassword.style.backgroundColor = "red";

    if (country.value == "nul") {
        country.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez sélectionner un pays ! </div>";
    } else {
        country.style.backgroundColor = "green";
    }

    if (errors.innerHTML === "") {

        let p = document.createElement("p");
        p.append("Formulaire envoyé !");
        body.appendChild(p)
    }


    if (errors.innerHTML === "") {
        form.reset();

    }

});

