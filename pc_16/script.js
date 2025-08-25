// let create = localStorage.setItem("name", "Tarun");
// let fetch = localStorage.getItem("name");
// let remove = localStorage.removeItem("name");
// let update = localStorage.setItem("name", "Tarun Sisodia");

// console.log(create);
// console.log(fetch);
// console.log(remove);
// console.log(update);

// localStorage.setItem("GU","Single");
// localStorage.setItem("username","tarun1sisodia");
// localStorage.getItem("username");


// localStorage.setItem("friends", `["akash","Tarun"]`);
localStorage.setItem("friends", ["akash", "Tarun"]); // the array will be converted into string and then the values of it visible to the user.

localStorage.setItem("group", { one: "Tarun", two: "Cow" }); // it will not store because it's not a string. Its Data type will be shown to there.

// let json = JSON.stringify({ 1: "One", 2: "Two", 3: "Three" });

// localStorage.setItem("numbers", json);

localStorage.setItem("chutiya", JSON.stringify(["Kavita", "Deepak kalu", "Krishna"]));

JSON.parse(localStorage.getItem("chutiya")); //Parsing Because to unlock the JSON of array.

localStorage.getItem("group");


