const addNote = document.querySelector('#add-note');
const form = document.querySelector('.form-container');
const card = document.querySelector('.container');
const closeFormBtn = document.querySelector('.closeForm');
const submitBtn = form.querySelector('.submit-btn');

// Select inputs by placeholder
const imgUrlInput = document.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = document.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = document.querySelector('input[placeholder="Enter home town"]');
const purposeInput = document.querySelector('input[placeholder="e.g., Quick appointment note"]');

// Select category radios by value
const emergencyRadio = document.querySelector('input[value="emergency"]');
const importantRadio = document.querySelector('input[value="important"]');
const urgentRadio = document.querySelector('input[value="urgent"]');
const norushRadio = document.querySelector('input[value="norush"]');

// Show form, hide card
addNote.addEventListener('click', function () {
    form.style.display = "flex";
    card.style.display = "none";
});

// Close form, show card
closeFormBtn.addEventListener('click', function () {
    form.style.display = "none";
    card.style.display = "flex";
});

// Handle form submit button
submitBtn.addEventListener('click', function () {
    form.style.display = "none";
    card.style.display = "flex";
});