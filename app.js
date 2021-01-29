const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: '44'
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')