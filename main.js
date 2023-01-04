const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://vuejs.org/guide/quick-start.html#creating-a-vue-application',
            inventory: 8,
            onSale: true,
        }
    }
})
