<!-- pages/login.vue -->
<template>
    <div>
        <h1>Login</h1>
        <form @submit="login">
            <input v-model="username" type="text" placeholder="Username">
            <input v-model="password" type="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    
    methods: {
        login() {
            const credentials = {
                username: this.username,
                password: this.password,
            };
            try {
                // this.$store.dispatch('auth/login', credentials);
                this.$router.push({name:'add'});
            } catch (error) {
                console.error(error.message);
            }
        },
    },
};
</script>
  