<template>
  <div>
    <h1>Block notes!</h1>
      <AddNote 
        @addnote="addNote"
      />
      <NoteList
        v-if="notes.length" 
        v-bind:notes="notes"
        @delnote="delNote"
      />
      <p v-else>No notes!</p>
  </div>


</template>

<script>

import NoteList from '@/components/NoteList'
import AddNote from '@/components/AddNote'

import {   getFromLocalStorage, saveToLocalStorage } from '../api/tutils'

export default {
  name: 'App',
  data() {
    return {
      notes: []
    }
  },
  mounted(){

    this.notes = getFromLocalStorage('Mnvnotes', this.notes);

  },
  
  components: {
    NoteList, AddNote
  },
  methods: {
    delNote(id){
      this.notes = this.notes.filter(t => t.id !== id)
      saveToLocalStorage('Mnvnotes', this.notes)      
    },
    addNote(note) {
      this.notes.push(note)
      saveToLocalStorage('Mnvnotes', this.notes)
    }

  }
}
</script>

<style>

body {
  background: #f3f3f3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
  
}

button {
  background: #000;
  color: #fff;
  font-weight: bolder;
  font-size: 20px;
}




</style>
