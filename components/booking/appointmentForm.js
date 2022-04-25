app4.component('appointment-form', {
    template:
    /*html*/
    `
    <form class="appointment-form" @submit.prevent="onSubmit">
        <h3>Create An Appointment</h3>

        <label for="name">First and Last Name:</label>
        <input id="name" placeholder="John Doe" v-model="name">

        <label for="email">Email Address:</label>
        <input id="email" placeholder="someemail@example.com" v-model="email">

        <label for="phone">Enter Phone Number:</label>
        <input id="phone" placeholder="(123) 456-7890">

        <label for="date">Enter Desired Appointment Date:</label>
        <input id="date" placeholder="MM/DD/YYYY" v-model="date">

        <label for="time">Enter Desired Appointment Time:</label>
        <input id="time" placeholder="HH:MM AM/PM" v-model="time">

        <label for="description">Enter Reason For Appointment:</label>
        <textarea id="description" v-model="description" rows="10" cols="60"></textarea>

        <input class="button" type="submit" value="Create My Appointment!">
    </form>
    `,
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            description: ''
        }
    },
    methods: {
        onSubmit() {
            let newAppointment = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                date: this.date,
                time: this.time,
                description: this.description
            }

            this.$emit('appointment-submitted', newAppointment)

            this.name = ''
            this.email = ''
            this.phone = ''
            this.date = ''
            this.time = ''
            this.description = ''
        }
    }
})