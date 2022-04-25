app.component('footer-display', {
    template:
    /*html*/
    `
    <div class="footer-display">
        <h3 style="background-color: transparent;">{{ title }}<h3>
        <div v-for="(item, index) in contactItems" :key="index">
            <a :href="item.link">{{ item.name }}</a> <!-- these items will not give a transparent background -->
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Contact Us',
            contactItems: [
                { id: 1, name: 'Call Us', link: 'tel:+13347120097' },
                { id: 2, name: 'Locate Us', link: "https://www.google.com/maps/place/Shaan's+Jewelers/@31.2535693,-85.4236901,18.75z/data=!4m13!1m7!3m6!1s0x88929212525f87b9:0x63051781beb6d685!2s900+Commons+Dr,+Dothan,+AL+36303!3b1!8m2!3d31.2540367!4d-85.4243382!3m4!1s0x8892921311c230fd:0x80c23c3721ef3899!8m2!3d31.2536213!4d-85.4240103" },
                { id: 3, name: 'Support', link: 'mailto:shaans' }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        }
    }
})