// 1️⃣ Change Profile Name & Role

let universal = document.querySelectorAll("div");

let h1 = document.querySelector("h1");

h1.textContent = "Tarun S. (Frontend Developer In Progress)";

let role = document.querySelector(".role");

role.textContent = "Future Javascript Pro";

// 2️⃣ Replace Profile Picture

let img = document.querySelector("img");

img.setAttribute('src', "https://tarun1sisodia.netlify.app/assets/images/Photo.jpg");


//we dont need to use . dot before the name of class.
img.classList.add("profile-pic");
img.style.width = "200px";
img.style.borderRadius = "50%";

//  3️⃣ Add a New Info Line

let profileCard = document.querySelector("div");

let newPara = document.createElement("p");

newPara.textContent = "Currently mastering the DOM without event listeners";

profileCard.appendChild(newPara);

// 4️⃣ Hide the Role Temporarily

let hideRole = document.querySelector(".role");
hideRole.hidden = true;

// 5️⃣ Replace Bio `<p>` with `<h3>`

let p = document.querySelector(".bio");

let h3 = document.createElement("h3");

h3.textContent = p.textContent;

p.replaceWith(h3);

//6️⃣ Change Background Color of Card

let BackgroundColor = document.querySelector(".profile-card");

BackgroundColor.style.backgroundColor = "purple";




