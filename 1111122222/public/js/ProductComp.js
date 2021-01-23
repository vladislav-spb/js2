Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filteredProduct: [],
            imgCatalog: 'https://placehold.it/300x200',
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filteredProduct = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filteredProduct.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product ref="refref" v-for="item of filteredProduct" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          cartAPI: this.$root.$refs.cart,
      };
    },

    template: `
        <div class="product-item">
            <img :src="img" alt="Some img">
            <div class="desc">
                <h3 class="prod-name">{{product.product_name}}</h3>
                <p class="prod-price">{{product.price}}₽</p>
                <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
<!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
            </div>
        </div>
    `
});