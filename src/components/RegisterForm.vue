<template>
    <div >
        <h1 class = "topic">Form Handling (understanding the two-way binding)</h1>
        <form @submit.prevent="register()" id="register">
            <ul>
                <li>
                    <input type="text" v-model="name" placeholder="Enter your name">
                    <h2 id="data">Your name is : {{ name }}</h2>
                </li>
            </ul>
            <button type="submit">Register</button>
        </form>
    </div>

</template>

<script>
export default {
  data() {
    let name = "";
    return {
      name
    }
  },
  methods: {
    register() {
      alert(`Welcome ${this.name} to our website!`);
      console.log(`Registered name : ${this.name}`)
    }
  }
}
</script>