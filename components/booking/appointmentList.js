app4.component('appointment-table', {
    props: {
        appointments: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="appointment-table">
        <table>
            <caption>{{ tableTitle }}</caption>
            <tr v-for="(item, index) in appointments" :key="index">
                <th>{{ item.name }}</th>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.description }}</td>
            </tr>
        </table>
    </div>
    `,
    data() {
        return {
            a: 'Currently Set Appointments'
        }
    },
    methods: {},
    computed: {
        tableTitle() {
            return this.a
        }
    }
})