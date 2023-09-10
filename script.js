let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
  const noteTitleInput = document.getElementById("noteTitle");
  const noteInput = document.getElementById("noteInput");
  const noteTitle = noteTitleInput.value.trim();
  const noteText = noteInput.value.trim();

  if (noteTitle !== "" && noteText !== "") {
    const note = { title: noteTitle, text: noteText };
    notes.push(note);
    noteTitleInput.value = "";
    noteInput.value = "";
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const card = document.createElement("div");
    card.classList.add("note-card");
    card.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div>${note.text}</div>
            <button class="delete-button" onclick="deleteNote(${index})">Delete</button>
        `;
    notesList.appendChild(card);
  });
}

displayNotes();

if (darkModeEnabled) {
  document.body.classList.add("dark-mode");
}

let darkModeEnabled =
  JSON.parse(localStorage.getItem("darkModeEnabled")) || false;

const darkModeToggle = document.getElementById("darkModeToggle");

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  darkModeEnabled = !darkModeEnabled;
  localStorage.setItem("darkModeEnabled", JSON.stringify(darkModeEnabled));
}

darkModeToggle.checked = darkModeEnabled;
darkModeToggle.addEventListener("change", toggleDarkMode);
