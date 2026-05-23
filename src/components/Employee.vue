<template>
    <h1 class = "topic">Employee Component (understanding state objects)</h1>
    <h2>Name : {{ this.name }}</h2>
    <h2>Salary : {{ salary }}</h2>
    <button @click="changeName()">Change Name</button>
    </template>


<script>
export default{
    //returns the local state of the component
    data(){
        return{
            name : "Doe",
            salary : 10000
        }
    },
    //methods are used to change the state of the component
    methods : {
        changeName(){
            this.name = "Smith"
        }
    }
}
</script>