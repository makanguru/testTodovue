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
export default {
  name: 'App',
  data() {
    return {
      notes: []
    }
  },
  mounted(){

    if (localStorage.getItem('Mnvnotes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('Mnvnotes'));
      } catch(e) {
        localStorage.removeItem('Mnvnotes');
      }
    }
      
  },
  
  components: {
    NoteList, AddNote
  },
  methods: {
    delNote(id){
      this.notes = this.notes.filter(t => t.id !== id)
      this.saveTodo()
    },
    addNote(note) {
      this.notes.push(note)
      this.saveNote()
    },
    saveNote() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem('Mnvnotes', parsed);
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
