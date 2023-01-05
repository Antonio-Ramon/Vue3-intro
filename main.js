const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://vuejs.org/guide/quick-start.html#creating-a-vue-application',
            inventory: 11,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],

            variants: [
                { id: 2234, color: 'Green' },
                { id: 2235, color: 'Blue' },
            ],

            sizes: [
                { label: 'P'},
                { label: 'M'},
                { label: 'G'},
                { label: 'GG'},
            ],
        }
    },
    
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -=1
        }, 
    }

})
