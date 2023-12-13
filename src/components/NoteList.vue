<script setup>
import { ref } from "vue";
import NewNote from "./NewNote.vue";

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
</script>

<template>
  <NewNote @noteCreated="addNoteToList" />
  <div class="listOfNotes">
    <h2>All Notes</h2>
    <ul>
      <li v-for="note in notes" :key="note.id">
        {{ note.title }}
        <br />
        {{ note.body }}
      </li>
    </ul>
  </div>
</template>
