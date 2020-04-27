<template>
    <div>
        <ul >
            <TodoItem  
                v-for="(todo, i) of todos" 
                v-bind:todo="todo"
                v-bind:idx="i"
                v-on:deltodo="delTodo"
                v-bind:key="todo.id"
            />    
        </ul>
    </div>
</template>


<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        delTodo(id){
            this.$emit('deltodo', id)
        }
    }
}
</script>


<style scoped>
    ul{
        list-style: none;
        margin: 0 auto;
        padding: 0;
        max-width: 80%;

    }
</style>