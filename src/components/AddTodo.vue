<template>
<div>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Create new note">
        <button type='submit' title='Add note'>&oplus;</button>
    </form>
</div>    
</template>



<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit(){
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

                this.$emit('addtodo', newTodo)
                this.title = ''
            }



        }
    }
}
</script>



<style scoped>

    form {
        margin: 20px;
    }

    input {
        background: #000;
        color:#fff;
        min-width: 50%;
        margin: 10px;
        height: 25px;
        padding-left: 10px;
    }

    ::-webkit-input-placeholder {color:#fff;}
    ::-moz-placeholder          {color:#fff;}/* Firefox 19+ */
    :-moz-placeholder           {color:#fff;}/* Firefox 18- */
    :-ms-input-placeholder      {color:#fff;}


</style>
