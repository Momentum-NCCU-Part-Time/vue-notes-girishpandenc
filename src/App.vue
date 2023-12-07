<script setup>
import { ref } from 'vue'
import NoteList from './components/NoteList.vue'

const header = ref('New Note')
const newNoteTitle = ref("")
const newNoteBody = ref("")
</script>

<template>
  <div>
    <h1>Vue Notes</h1>
    <h3> {{header}} </h3>
    <form id="NoteForm">
      <div class="createNoteForm">
        <input v-model="newNoteTitle" type="text" placeholder="Tiltle">
        <input v-model="newNoteBody" type="text" placeholder="Body">
        <button @submit.prevent="saveNote">Save</button>
      </div>
    </form>
  </div>
  
  <NoteList />
</template>

<style scoped></style>
