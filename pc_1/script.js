//**************************************************************************** */
//1. Add a new <li> at the end.
//**************************************************************************** */
//first we select the list
let select = document.querySelector("ul");

//then we create the new element 
let liEnd = document.createElement("li");

//then we pass the data in that newly created Element
liEnd.textContent = "Script is at End";

//and finally added new element at the end of the list.
select.appendChild(liEnd);

//**************************************************************************** */
// 2.Add a new <li> at the beginning.
//**************************************************************************** */
//first we select the list
let select2 = document.querySelector("ul");

//then we make a new element
let liBegin = document.createElement("li");

//we pass the data in element
liBegin.textContent = "I'm at Begin";

// at at beginning of script or list.
select2.prepend(liBegin);

//**************************************************************************** */
//3. Change the text of the second <li>.
//**************************************************************************** */

// let changeSecondText = document.querySelectorAll("ul");
let changeALl = document.querySelectorAll("li");

changeALl[1].textContent = "replacing with answer 3";

//**************************************************************************** */
//4. Remove the last element from list.
//**************************************************************************** */
select.removeChild(select.lastElementChild);

//**************************************************************************** */
//5. Replace one <li> with a <p> tag but keep the same text.
//**************************************************************************** */
let para = document.querySelector("li");
let newpara = document.createElement("p");

// keeping the same text from right now element.
para.textContent = newpara.textContent;

//replacing the para with 
para.replaceWith(newpara);

