const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            inventory: 3,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -=1
            this.checkStock()
        },
        checkStock(){
            if(this.inventory == 0){
                this.inStock = false
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
    }
})
