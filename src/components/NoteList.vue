<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests'
import NewNote from './NewNote.vue';

const notes = ref([])
getNotes().then((data) =>{
notes.value = data
})

const addNewNote = (note) => {
  notes.value = [...notes.value, getNotes]

}
</script>

<template>
<NewNote @noteCreated="addNewNote" />
<div v-for="note in notes" :key="id">
{{ note.title}}
<br>
{{ note.body }}

</div>

</template>