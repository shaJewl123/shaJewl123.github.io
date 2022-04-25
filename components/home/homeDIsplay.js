app.component('home-display', {
    template:
    /*html*/
    `
    <div class="home-display">
        <h1>{{ title }}</h1>
        <h3>{{ caption }}</h3>
        <p>{{ info }}</p>
    </div>
    `,
    data() {
        return {
            a: 'Shaans\' Jewelers',
            b: 'Established In -year-',
            imageUrl: "../../assets/images/business_name.png",
            description: [
                'The Jewelery Store for all of your needs, from watches',
                'and bracelets to various styles of hip-hop accessories,',
                'we have you covered! For directions, click the "Come',
                'See Us" button at the top of the page. To give us a call,',
                'please click the "Call Us" button. To book an appointment,',
                'click "Book Appointment".'
            ]
        }
    },
    computed: {
        image() {
            return this.imageUrl
        },
        info() {
            let sentence = ''

            for (let i = 0; i < this.description.length; i++) {
                let x = this.description[i] + ' '

                sentence += x 
            }

            return sentence
        },
        title() {
            return this.a
        },
        caption() {
            return this.b
        }
    }
})