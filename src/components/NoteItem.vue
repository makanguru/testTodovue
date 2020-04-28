<template>
    <li>
    <div class="lileft">
        <div>{{idx+1}}</div>
    </div>        
    <div class='title'>{{note.title }}</div>
    
    <button title='Edit note with list of todo'>
        <router-link :to="{name: 'editNote', params: {id: note.id}}">
            &hellip;
        </router-link>
    </button>

    <button 
        v-on:click="$emit('delnote', note.id)" title='Delete row'>
        &otimes;
    </button>
    </li>
</template>

<script>
export default {
    props: {
        note: {
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
        margin-right: 10px;
    }

    button a{
        color: #fff;
    }

    @media ( max-width: 578px ) {
        .lileft {
            padding-right: 10px;
        }
        button {
            margin-right: 35px;
        }
    }	




</style>>

</style>