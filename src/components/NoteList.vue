<template>
    <div>
        <ul >
            <NoteItem  
                v-for="(note, i) of notes" 
                v-bind:note="note"
                v-bind:idx="i"
                v-on:delnote="delNote"
                v-bind:key="note.id"
            />    
        </ul>
    </div>
</template>


<script>
import NoteItem from '@/components/NoteItem'
export default {
    props: ['notes'],
    components: {
        NoteItem
    },
    methods: {
        delNote(id){
            this.$emit('delnote', id)
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