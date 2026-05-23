<template>
    <div id="customer">
        <h1 class = "topic">Customer Component (understanding Props)</h1>
        <h2>Name : {{ name }}</h2>
        <h2>Salary : {{ salary }}</h2>
    </div>
</template>

<script setup>

//getting data from parent component using props - App.vue

defineProps({
    name : {
        type : String,
        required : true
    },
    salary:{
        type : Number,
        required : true
    }
})

// export default {
// props : {
//     name : {
//         type : String,
//         required : true
//     },
//     salary:{
//         type : Number,
//         required : true
//     }
// }
// }

</script>