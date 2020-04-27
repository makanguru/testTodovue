<template>
    <li>
    <div class="lileft">
        <div>{{idx+1}}</div>
    </div>        
    <div class='title'>{{todo.title }}</div>
    
    <button 
        v-on:click="$emit('deltodo', todo.id)">
        &otimes;
    </button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        idx: Number
    }
}
</script>

<style scoped>
    li {
        background: #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        margin: 10px;
    }

    .lileft {
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
    }

    .title {
        color: #000;
        min-width: 80%;
        max-width: 80%;
        word-wrap:  break-word;
        height: 100%;
        text-align: left;
    }

    button {
        height: 33px;
    }

</style>>

</style>