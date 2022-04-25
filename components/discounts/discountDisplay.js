app.component('discounts-display', {
    template:
    /*html*/
    `
    <div class="discounts-display">
        <div id="box-1">
            <h3>{{ title }}</h3>
        </div>
        <div id="monthly-discounts" v-if="monthlyDiscounts.length" v-for="(item, index) in monthlyDiscounts" :key="index">
            <p>
                Monthly Discounts:
                <ol>
                    <li>{{ item }}</li>
                </ol>
            </p>
        </div>
        <div id="credit-info" v-if="creditCardInfo.length" v-for="(item, index) in creditCardInfo" :key="index">
            <p>
                Payment Options:
                <ol>
                    <li>{{ item }}</li>
                </ol>
            </p>
        </div>
    </div>
    `,
    data() {
        return {
            monthlyDiscounts: [
                'Select Gold, Silver, and Diamonds 50% OFF'
            ],
            creditCardInfo: [
                'No Minimum Down Payment for items on Layaway'
            ]
        }
    },
    methods: {},
    computed: {}
})