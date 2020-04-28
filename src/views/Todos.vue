<template>
    <div>
        <div class="form-group">
    		<router-link to="/">Back to block notes!</router-link>
        </div>
        <h2>Edit: work with a note and its to-do list </h2>
        <hr>

    </div>
</template>
<script>
    export default {
        mounted() {
            const app = this;
            const idNote = app.$route.params.id;
            app.noteId = idNote;
            console.log(idNote, app.$route)
        },
        data: function () {
            return {
                noteId: null
            }
        },
        methods: {
            saveNoteAndTodos() {
            }
        }
    }
</script>