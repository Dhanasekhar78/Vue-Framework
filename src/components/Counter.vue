<template>

    <div id = "counter">
        <h1 class = "topic">Counter Component (understanding event handling)</h1>
        <h2>Count : {{ count }}</h2>
        <button @click="increment()">Increment</button>
        <button @click="decrement()">Decrement</button>
        <button @click="reset()">Reset</button>
    </div>

</template>


<script>

export default{
    data(){
        let count = 0;
        return{
            count 

        }
    },
    methods :{
        increment(){
            this.count++
        },
        reset(){
            this.count = 0
        },
        decrement(){
            this.count--
        }
    }

}

</script>