<script setup>
import { ref } from "vue";
import NewNote from "./NewNote.vue";
import EditDelete from "./EditDelete.vue";

const notes = ref([]);

fetch("http://localhost:3000/notes/", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => (notes.value = data));

const addNoteToList = (note) => {
  notes.value = [...notes.value, note];
};

const updateNote = (editedNote) => {
  notes.value = notes.value.map((note) => {
    if (note.id === editedNote.id) {
      return editedNote;
    }
    return note;
  });
};
</script>

<template>
  <NewNote @noteCreated="addNoteToList" />
  <div class="listOfNotes">
    <h2 class="allNotes">All Notes</h2>
    <ul v-for="note in notes" :key="note.id">
      {{
        note.title
      }}
      <br />
      {{
        note.body
      }}
      <EditDelete
        :note="note"
        @noteEdited="updateNote"
        @noteDeleted="removeNote"
      />
    </ul>
  </div>
</template>
