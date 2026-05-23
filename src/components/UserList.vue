<template>

    <h1 class="topic">User List rendering (understanding the list rendering)</h1>

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
import service from '../service.js'
export default{
    data(){
        return{
            users:service.getUsers()
        }
    }
}
</script>