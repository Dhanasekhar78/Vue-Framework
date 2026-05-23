<template>
    <div>
        <h1 class ="topic">User Login (understanding the conditional rendering)</h1>
    </div>
    <div id="success" v-if="isLoggedIn">
        <h1>Welcome User</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="danger" v-if="!isLoggedIn">
        <h1>Thank you!!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
        <button @click="login" v-if="!isLoggedIn">Login</button>
        <button @click="logout" v-if="isLoggedIn">Logout</button>
    </div>
</template>


<script>
export default{
    data(){
        let isLoggedIn = false;
        return{
            isLoggedIn
        }
    },
    methods:{
        login(){
            this.isLoggedIn = true
        },
        logout(){
            this.isLoggedIn = false
        }
    }
}
</script>