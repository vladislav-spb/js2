const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        searchText: '',
        showCart: false,
        basketUrl: '/getBasket.json',
        catalogUrl: '/catalogData.json',
        products: [],
        basketItems: [],
        filteredProduct: [],
        imgCatalog: 'https://placehold.it/300x150',
        imgBasket: 'https://placehold.it/50x100',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.basketItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.basketItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(item), 1)
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.searchText, 'i');
            this.filteredProduct = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.basketItems.push(el);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filteredProduct.push(el);
                }
            });
    }
});

