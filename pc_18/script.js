const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amita mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "Tanya",
        pic: "https://i.pinimg.com/736x/64/5e/a9/645ea9dffea74a67633b6fc2215500d5.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },
];

// Elements cache (so querySelector isn’t repeated many times)
const flex = document.querySelector('.flex');
const cardsContainer = document.querySelector('.cards');
const inp = document.querySelector('.inp');

// Heading creation (cleaner)
const h1 = Object.assign(document.createElement("h1"), {
    textContent: "Flex Search Engine",
    className: "h11"
});
flex.prepend(h1);

// Function to render cards
function showUsers(arr) {
    // Clear old results first
    cardsContainer.innerHTML = "";

    arr.forEach(({ name, pic, bio }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <img src="${pic}" alt="${name}" class="bg-img" />
      <div class="blurred-layer" style="background-image:url('${pic}')"></div>
      <div class="content">
        <h3>${name}</h3>
        <p>${bio}</p>
      </div>
    `;
        cardsContainer.appendChild(card);
    });
}

// Initial render
showUsers(users);

// Search functionality
// Debounce utility (we create this first)
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // reset previous timer
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}


// Attach debounced input handler
inp.addEventListener("input", debounce((e) => {
    const userinput = e.target.value.toLowerCase().trim();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().startsWith(userinput)
    );

    showUsers(filteredUsers);
}, 300)); // <-- debounce delay in ms
