let users = [
    { name: "Tarun", img: "1", bio: "Killer" },
    { name: "Tarun Kushwah", img: "2", bio: "Killer 5" },
    { name: "Vivek", img: "4", bio: "Killer 4" },
    { name: "Mohit", img: "5", bio: "Killer 3" },
    { name: "Rohit", img: "11", bio: "Killer 2" },
];

function showUsers(arr) {

}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
    let newUsers = users.filter((users) => {
        return users.name.startsWith(inp.value);
    })
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});



