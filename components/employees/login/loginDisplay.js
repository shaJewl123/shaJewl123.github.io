app5.component('login-display', {
    template:
    /*html*/
    `
    <form class="login-form" @prevent.submit="onSubmit">
        <h3>Please Sign-In To Continue</h3>

        <label for="username">Username:</label>
        <input id="username" v-model="username" placeholder="my_username#12345">

        <label for="password">Password:</label>
        <input id="password" v-mode="password">

        <input class="button" type="submit" value="Sign In">
    </form>
    `,
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.username === '' || this.password === '') {
                alert('Username/Password Does Not Exist. Try Again!')
                return
            } else {
            }
        }
    },
    computed: {}
})