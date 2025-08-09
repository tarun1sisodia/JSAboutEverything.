let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

function formDetails(dets) {
    // console.log(dets);
    dets.preventDefault();
    // console.log(inputs);
    // console.log(inputs[0].value);
    // console.log(inputs[1].value);
    // console.log(inputs[2].value);
    // console.log(inputs[3].value);

    let card = document.createElement("div");
    let profile = document.createElement("div");

    card.classList.add("card");
    profile.classList.add("profile");


    console.log(card);

    let img = document.createElement("img");
    // img.setAttribute("src", "https://media.licdn.com/dms/image/v2/D5603AQEoAjMmO-fWsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722145674673?e=2147483647&v=beta&t=Ua6bu-Q_0ukaa5I2yBmrvaxP6zvpCoSSAEBrnMi9eBI");

    let h2 = document.createElement("h2");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    h2.textContent = inputs[1].value;
    h2.style.fontStyle = "bold";
    h4.textContent = inputs[2].value;
    p.textContent = inputs[3].value;


    // p.classList.add("card p");
    // h2.classList.add("card h2");
    // h4.classList.add("card h4");
    // img.classList.add("profile img")

    img.setAttribute("src", inputs[0].value);
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h4);
    card.appendChild(p);
    main.appendChild(card);
    inputs.forEach((i) => {
        if (i.type !== "submit") {
            i.value = "";

        }
    });
}

form.addEventListener("submit", formDetails);
