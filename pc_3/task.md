```markdown
# 🏆 JavaScript Core + DOM Challenges (No Event Listeners)

These challenges are designed to sharpen your **JavaScript fundamentals** and **DOM manipulation skills** without using event listeners.  
Focus only on **primitive data types** and **core concepts**.

---

## 1️⃣ Closures & Lexical Scoping – Text Generator
- Create a **function** that keeps a counter in memory using **closures**.
- Each time the function is called, it should **append** a new `<p>` inside a `<div>` showing:

This is paragraph #X

- You must store the counter **inside the closure**, not in a global variable.

---

## 2️⃣ Primitive Type Handling – Profile Info
- Store your **name** (string), **age** (number), and **isStudent** (boolean) in separate variables.
- Dynamically create `<li>` elements for each of them and insert into a `<ul>`.
- Show the **data type** of each value next to it, like:
```

Name: Tarun (string)
Age: 24 (number)
Is Student: true (boolean)

````

---

## 3️⃣ Comparison Operators – Access Control
- Store a number in a variable called `userLevel`.
- If `userLevel` is **strictly equal** to `1`, insert a `<p>` saying `"Basic Access Granted"`.
- If it’s `2` (strict equality), insert `"Premium Access Granted"`.
- If it’s anything else, insert `"No Access"`.
- You must use **strict comparison (`===`)** and avoid loose comparison.

---

## 4️⃣ Nullish Coalescing & Default Values
- Create variables:
```javascript
let username = null;
let displayName = username ?? "Guest User";
````

* Insert a `<h2>` in the DOM showing the final display name.
* Change `username` to a valid string and verify that the value updates **only when it’s not null or undefined**.

---

## 5️⃣ Loops + DOM – Countdown Creator

* Use a **for loop** to create `<p>` elements counting down from 10 to 1.
* Each `<p>` should say:

  ```
  Countdown: X
  ```
* Append them inside a `<div>`.

---

## 6️⃣ Boolean Logic – Login Simulator

* Create two boolean variables:

  ```javascript
  let hasPassword = true;
  let hasUsername = false;
  ```
* Use logical operators (`&&`, `||`, `!`) to decide which `<p>` to insert:

  * `"Login Successful"`
  * `"Missing Username"`
  * `"Missing Password"`
  * `"Missing Both"`

---

## 7️⃣ BigInt Handling – Large Number Display

* Store a **BigInt** in a variable (greater than `Number.MAX_SAFE_INTEGER`).
* Insert a `<p>` in the DOM showing the value and the fact that it’s a **bigint**.

---

## 8️⃣ Symbol Uniqueness – ID Tags

* Create two symbols with the same description.
* Verify (by comparison) that they are not equal.
* Insert a `<p>` explaining why.

---

## 9️⃣ Primitive Conversion Test

* Start with:

  ```javascript
  let score = "100";
  ```
* Convert it to a number using `Number()` and show the result in `<p>` with its **type**.
* Convert a boolean to a string and show its type.
* Convert `null` to a number and explain the result in another `<p>`.

---

## 🔟 Mixed Challenge – DOM Report Generator

* Store:

  * A string
  * A number
  * A boolean
  * A null value
  * An undefined value
* Loop through them and for each:

  * Create a `<li>` in a `<ul>`
  * Show the **value** and **type**
* At the end, insert a `<p>` summarizing how JavaScript handles **primitive data types**.

---

### ✅ Rules:

* Do **not** use event listeners.
* Do **not** use arrays or objects (non-primitive).
* Use only **primitive data types**.
* Use **DOM methods** like:

  * `createElement()`
  * `appendChild()`
  * `prepend()`
  * `replaceWith()`
  * `.textContent`
* Keep all variables **block scoped** with `let` or `const`.
```
