document.addEventListener('DOMContentLoaded', () => {
  const showNoteFormBtn = document.getElementById('show-note-form');
  const noteForm = document.getElementById('note-form');
  const saveNoteBtn = document.getElementById('save-note');
  const cancelNoteBtn = document.getElementById('cancel-note');
  const notesContainer = document.getElementById('notes-container');
  const titleInput = document.getElementById('note-title');
  const contentInput = document.getElementById('note-content');

  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function createNoteElement(note, index) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
          <h2>${note.title}</h2>
          <p>${note.content}</p>
          <div class="note-actions">
              <button onclick="editNote(${index})"><i class="fas fa-edit"></i></button>
              <button onclick="deleteNote(${index})"><i class="fas fa-trash-alt"></i></button>
          </div>
      `;
    return noteElement;
  }

  function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
      const noteElement = createNoteElement(note, index);
      notesContainer.appendChild(noteElement);
    });
  }

  function addNote() {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const newNote = { title, content };
      notes.push(newNote);
      saveNotes();
      renderNotes();
      titleInput.value = '';
      contentInput.value = '';
      noteForm.classList.add('hidden');
    }
  }

  window.editNote = function (index) {
    const note = notes[index];
    titleInput.value = note.title;
    contentInput.value = note.content;
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
    noteForm.classList.remove('hidden');
  };

  window.deleteNote = function (index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
  };

  showNoteFormBtn.addEventListener('click', () => {
    noteForm.classList.remove('hidden');
  });

  saveNoteBtn.addEventListener('click', addNote);

  cancelNoteBtn.addEventListener('click', () => {
    titleInput.value = '';
    contentInput.value = '';
    noteForm.classList.add('hidden');
  });

  renderNotes();
});
