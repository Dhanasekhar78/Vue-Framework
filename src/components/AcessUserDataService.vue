<template>
<div>
    <h1 class="topic">Access User Data Service (understanding axios)</h1>
</div>
<div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>address</th>
                <th>phone</th>
                <th>company</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.address.street }}, {{ user.address.city }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.company.name }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Service from '../AcessUserData.js'

export default{
    data(){
        return{
            users:[]
        }
    },
    async created(){
        this.users = await Service.getData();
        console.log(this.users);
    }
}
</script>