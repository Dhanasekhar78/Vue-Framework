<template>
<div id = "c1">
    <h1>App Component</h1>

        <HelloWorld/>
        <Customer name="Jhon" salary="5000"/>
        <Employee/>
        <Counter/>
        <Greeting/>
        <RegisterForm/>
        <AuthUser/>
        <UserList/>
        <AcessUserDataService/>
        
</div>




</template>

<script setup>
import { customRef } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Customer from './components/Customer.vue';
import Employee from './components/Employee.vue';
import Counter from './components/Counter.vue';
import Greeting from './components/Greeting.vue';
import RegisterForm from './components/RegisterForm.vue';
import AuthUser from './components/AuthUser.vue';
import UserList from './components/UserList.vue';
import AcessUserDataService from './components/AcessUserDataService.vue';
</script>

<style>
@import './assets/Style.css';
</style>