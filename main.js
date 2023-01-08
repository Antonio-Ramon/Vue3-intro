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
                { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' },
                { id: 2236, color: 'Red', image: './assets/images/socks_red.jpg' },
                { id: 2237, color: 'Brown', image: './assets/images/socks_brown.jpg' },
                { id: 2238, color: 'Purple', image: './assets/images/socks_purple.jpg' },
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

        removefromCart(){
            this.cart -= 1
            this.inventory +=1
        },

        updateImage(variantImage){
            this.image = variantImage
        }
    },


})
