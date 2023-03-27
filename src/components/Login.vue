<template>
    <main>
        <article>
            <section class="titles">
                <h2>Vue</h2>
                <h1>Task</h1>
            </section>
            <form action="">
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="email" id="username" placeholder="mail@example.com" />
                </div>

                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="*************" />
                </div>
                <button @click="handleLogin" type="submit" class="login-button">
                    Login
                </button>
            </form>
        </article>
    </main>
</template>

<script>
import { useUserStore } from '@/stores/UserStore'
export default {
    name: 'Login',
    methods: {
        handleLogin() {
            const username = document.querySelector('#username').value
            const password = document.querySelector('#password').value

            if (!(username === "" || password === "") && !this.userStore.isUserExists(username)) { 
                this.userStore.addUser(username, password)
            }
        }
    },
    setup() {
        const userStore = useUserStore()
        
        return userStore
    }
}

</script>

<style></style>