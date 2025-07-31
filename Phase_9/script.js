let items = document.querySelectorAll("li");

items[0].textContent = "Orange";

console.log(items);


//NodeList, which is static (won’t auto-update if DOM changes).

//HTMLCollection, which is live (auto-updates if DOM changes).
