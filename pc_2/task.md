
````markdown
# 🖥 JavaScript DOM Challenge – Dynamic Profile Card (No Event Listeners)

This challenge will test your DOM manipulation skills without using any event listeners.  
You will **transform** a static profile card into a dynamic one using **JavaScript only**.

---

## 📄 Starter HTML
```html
<body style="background: black; color: white;">
    <div class="profile-card">
        <h1>Tarun Sisodia</h1>
        <p class="role">JavaScript Learner</p>
        <img src="https://via.placeholder.com/150" alt="Profile Picture">
        <p class="bio">Learning DOM manipulation at Sheryians Coding School 🚀</p>
    </div>
    <script src="script.js"></script>
</body>
````

---

## 🎯 JavaScript Tasks

### 1️⃣ Change Profile Name & Role

* Change `<h1>` text to:

  ```
  Tarun S. (Frontend Developer in Progress)
  ```
* Change `.role` text to:

  ```
  Future JavaScript Pro
  ```

---

### 2️⃣ Replace Profile Picture

* Change the `src` attribute of `<img>` to **any image you like**.
* Add a new class `.profile-pic` and style it in JavaScript:

  * Width: `200px`
  * Border radius: `50%`

---

### 3️⃣ Add a New Info Line

* Append a new `<p>` at the end of `.profile-card`:

  ```
  Currently mastering the DOM without event listeners
  ```

---

### 4️⃣ Hide the Role Temporarily

* Use:

  ```javascript
  document.querySelector(".role").hidden = true;
  ```

  to hide the `.role` paragraph.

---

### 5️⃣ Replace Bio `<p>` with `<h3>`

* Keep the same bio text but replace the `<p>` element with a `<h3>` tag.

---

### 6️⃣ Change Background Color of Card

* Use:

  ```javascript
  document.querySelector(".profile-card").style.backgroundColor = "darkblue";
  ```

---

## 💡 Extra Twist

Add **two new hobbies** dynamically under the card in a `<ul>`:

```html
<ul>
    <li>Coding</li>
    <li>Photography</li>
</ul>
```

* Create them using:

  ```javascript
  document.createElement()
  appendChild()
  ```

---

## ✅ Goal

When your JavaScript script runs:

* The profile should **look completely transformed**.
* You must **not** manually edit the HTML file for changes — all changes happen through JavaScript.

---

```

---

If you want, I can now make **another `.md` file** for your **previous DOM list manipulation project** so your GitHub has **both challenges** documented.  

Do you want me to do that next?
```
