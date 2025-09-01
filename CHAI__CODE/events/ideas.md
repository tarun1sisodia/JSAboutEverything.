## 🔥 Event Practice Roadmap

### 1. Mouse Events

* **click, dblclick, contextmenu (right click)**
* **mouseover, mouseout, mouseenter, mouseleave**
* **mousemove** → (track mouse coordinates live)

👉 Practice idea:

* Create a box and show the mouse `x,y` coordinates inside it.
* Change background color on `mouseover` and reset on `mouseout`.

---

### 2. Keyboard Events

* **keydown, keyup, keypress**
* Access `e.key`, `e.code`, `e.shiftKey`, etc.

👉 Practice idea:

* Create a typing test area that shows what key the user pressed.
* If the user presses **Enter**, submit a form automatically.

---

### 3. Form Events

* **submit** (with `preventDefault`), **input**, **change**, **focus**, **blur**

👉 Practice idea:

* Live character counter for a textarea.
* Validate form fields before submission (e.g., email format).

---

### 4. Event Delegation (your code already has this 🎉)

You used it to delete images. Extend it by:

* Add a **Restore button** that brings deleted items back.
* Add a **favorite toggle**: click → highlight border.

---

### 5. Event Bubbling vs Capturing

You touched this, but let’s make it practical:

* Attach listeners to `ul`, `li`, and `img`.
* Log order of events in **bubble phase** vs **capture phase**.
* Experiment with `stopPropagation()`.

---

### 6. Window & Document Events

* **load, DOMContentLoaded**
* **resize, scroll**
* **beforeunload**

👉 Practice idea:

* Show a progress bar that fills up as you scroll.
* Alert the user before leaving the page.

---

### 7. Advanced: Custom Events

You can **create your own events**.

```js
let myEvent = new CustomEvent("myevent", {
  detail: { name: "Charon", mood: "🔥 learning events!" }
});

document.addEventListener("myevent", function(e) {
  console.log("Custom Event Triggered:", e.detail);
});

// Trigger
document.dispatchEvent(myEvent);
```

---

## 🎯 Suggested Practice Projects

1. **Image Gallery**

   * Click an image → show in a modal
   * Esc key closes modal

2. **Todo List**

   * Add items, mark complete, delete with delegation
   * Keyboard shortcut: press `Enter` to add

3. **Drawing App**

   * Track `mousemove` while holding mouse button
   * Draw on canvas or div

4. **Form Validation**

   * Show real-time errors
   * Prevent submit if invalid