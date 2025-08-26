

function addLanguage(lang) {
    const list = document.createElement('li');
    list.innerHTML = lang;
    document.body.querySelector(".language").appendChild(list);

}
addLanguage('Dart');
addLanguage('C');

//Optimize Approach...
function advanceLanguage(lang) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    document.querySelector('.language').appendChild(li);
}
advanceLanguage('PHP');

function editElement() {
    //Edit
    const secondLang = document.querySelector("li:nth-child(2)");
    // console.log(secondLang);
    const newli = document.createElement("li");
    newli.textContent = "Node.js";
    secondLang.replaceWith(newli);
}
editElement();

//Edit
function editElement2(whatToSelect, whatTOCreate, Text) {
    const FourLang = document.querySelector(whatToSelect);
    const newli = document.createElement(whatTOCreate);
    newli.textContent = Text;
    FourLang.replaceWith(newli);
}
editElement2("li:nth-child(4)", "li", "Swift");


//Remove Element..
function remove() {
    const c = document.querySelector('li:nth-child(3)');
    c.remove();
}
remove();