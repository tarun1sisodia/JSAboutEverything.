//div pr lagana h na to div ko select kro.
let main = document.querySelector("#main");

window.addEventListener("mousemove", (i) => {
    // console.log(i);

    // console.log(i.clientX, i.clientY);// ye clientX islye kyunki ye X ki values ko contain kr rha h. client Y.
    main.style.top = i.clientY + "px";
    main.style.left = i.clientX + "px";

});

/*
3. Event Bubbling (and Capturing)
When an event happens on an element, it can travel through the DOM in two phases:

Capturing Phase → From the window → document → html → body → down to the target element.

Bubbling Phase → From the target element back up to body → html → document → window.

By default, addEventListener uses bubbling (phase 2).

*/