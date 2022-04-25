app4.component('appointment-display', {
    template:
    /*html*/
    `
    <appointment-form @appointment-submitted="addAppointment"></appointment-form>
    `,
    data() {
        return{
            appointments: []
        }
    },
    methods: {
        addAppointment(newAppointment) {
            this.appointments.push(newAppointment)
        }
    },
    computed: {}
})