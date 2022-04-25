app3.component('catalog-display', {
    template:
    /*html*/
    `
    <div class="catalog-display">
        <div id="box-1">
            <h3>{{ title }}</h3>
            <p v-html="caption">{{ caption }}</p>
        </div>
        <div id="box-2">
            <div v-for="(item, index) in catalogItems" :key="index">
                <a :href="item.link">
                    <figure>
                        <img :src="item.url">
                        <figcaption>
                            {{ item.name }}
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            a: 'Shaans\' Catalog',
            b: [
                'Our inventory is broken down by catalog as you can see',
                'below. To browse the items within the category, simply',
                'click the category icon, and it will load the items from',
                'there. If you have any problems at all, please do not hesitate',
                'to contact <a href="mailto:shaans.tech.supp@gmail.com">tech support</a>.'
            ],
            catalogItems: [
                { id: 1, name: "Watches", url: "./catalogImages/watch.jpg", link: "./catalogPages/Watches.html" },
                { id: 2, name: "Rings", url: "./catalogImages/ring.jpg", link: "./catalogPages/Rings.html" },
                { id: 3, name: "Necklaces", url: "./catalogImages/necklace.jpg", link: "./catalogPages/Necklaces.html" },
                { id: 4, name: "Charms", url: "./catalogImages/charm.jpg", link: "./catalogPages/Charms.html" },
                { id: 5, name: "Bracelets", url: "./catalogImages/bracelet.jpg", link: "./catalogPages/Bracelets.html" },
                { id: 6, name: "Anklets", url: "./catalogImages/anklet.jpg", link: "./catalogPages/Anklets.html" }
            ]
        }
    },
    methods: {},
    computed: {
        title() {
            return this.a
        },
        caption() {
            let sentence = ''

            for (let i = 0; i < this.b.length; i++) {
                let x = this.b[i] + ' '

                sentence += x
            }

            return sentence
        }
    }
})