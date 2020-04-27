<template>
  <div id="app">
    <h1>Block notes!</h1>
      <AddNote 
        @addnote="addNote"
      />
      <TodoList 
        v-bind:todos="todos"
        @deltodo="delTodo"
      />
  </div>


</template>

<script>

import TodoList from '@/components/TodoList'
import AddNote from '@/components/AddNote'
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted(){

    if (localStorage.getItem('Mnvtodos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('Mnvtodos'));
      } catch(e) {
        localStorage.removeItem('Mnvtodos');
      }
    }
      
  },
  
  components: {
    TodoList, AddNote
  },
  methods: {
    delTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
      this.saveTodo()
    },
    addNote(todo) {
      this.todos.push(todo)
      this.saveTodo()
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('Mnvtodos', parsed);
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
