const app = Vue.createApp({
    //data,function
    data() {
        return {
            books: [
                {
                    title: "book - 1",
                    author: "Ar Kar Lin",
                    age: 18,
                    image: "images/1.png",
                    isFav: true,
                },
                {
                    title: "book - 2",
                    author: "kyawkyaw",
                    age: 24,
                    image: "images/2.jpeg",
                    isFav: true,
                },
                {
                    title: "book - 3",
                    author: "mgmg",
                    age: 34,
                    image: "images/3.jpeg",
                    isFav: true,
                },
            ],
            showBook: true,
            link: "http://www.youtube.com",
        };
    },
    methods: {
        mouseoverHandler(event, data) {
            console.log("mouse over is working", event.type, data);
        },
        mouseleaveHandler(event) {
            console.log("mouse leave is working");
        },
        dblclickHandler(event) {
            console.log("double click is working");
        },
        bookFavHandler(book) {
            book.isFav = !book.isFav;
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        },
    },
});
app.mount("#app");
