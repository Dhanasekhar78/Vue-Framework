<template>
    <div>
        <h1 class="topic">Greeting Component (understanding event handling)</h1>
        <h2 id ="message">{{ message }}</h2>
        <button @click="greeting('Good Morning')">Good Morning</button>
        <button @click="greeting('Good Afternoon')">Good Afternoon</button>
        <button @click="greeting('Good Evening')">Good Evening</button>
    </div>
</template>

<script>
export default{
    data(){
        let message="";
        return{
            message
        }
    },
    methods:{
        greeting(message){
            this.message = message
        }
    }
}
</script>