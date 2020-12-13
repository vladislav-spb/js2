<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog_link_to_cart"><span class="material-icons">
                    add_shopping_cart
                </span>{{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="filters">
            <v-select :selected="selected" :options="categories" @select="sortByCategories" />
            <div class="range-slider">
                <input type="range" min="0" max="2000" step="10" v-model.number="minPrice" @change="setRangeSlider">
                <input type="range" min="0" max="2000" step="10" v-model.number="maxPrice" @change="setRangeSlider">
            </div>
            <div class="range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>
        <div class="v-catalog_list">
            <v-catalog-item v-for="product in filtredProducts" :key="product.article" v-bind:product_data="product" @addToCart="addToCart" @productClick="productClick" />
        </div>
    </div>

</template>


<script>
    import vCatalogItem from './v-catalog-item'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    import vSelect from './v-select'
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSelect
        },
        props: {},
        data() {
            return {
                categories: [{
                        name: 'All',
                        value: "al"
                    },
                    {
                        name: 'Accessories',
                        value: "acces"
                    },
                    {
                        name: 'Laptop',
                        value: 'lap'
                    },
                ],
                selected: 'ALL',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 2000,
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'SEARCH_VALUE'
            ]),
            filtredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                    return this.PRODUCTS
                }
            },
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            productClick(article) {
                this.$router.push({
                    name: 'product',
                    query: {
                        'product': article
                    }
                })

            },
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByCategories()
            },
            sortByCategories(category) {
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS]
                this.sortedProducts =this.sortedProducts.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })
                if (category) {
                    this.sortedProducts =this.sortedProducts.filter(function (e) {
                    vm.selected = category.name;   
                    return e.category === category.name
                })  
                }
                //this.sortedProducts = [];
               // let vm = this;
               // this.PRODUCTS.map(function(item) {
                 //   if (item.category === category.name) {
                     //   vm.sortedProducts.push(item);
                   // }
               // })
              //  this.selected = category.name
            },
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            sortProductsBySearchValue(value) {
                this.sortedProducts = [...this.PRODUCTS]
                if (value) {
                    this.sortedProducts = this.sortedProducts.filter(function(item) {
                        return item.name.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.sortedProducts = this.PRODUCTS;
                }
            },
        },
        watch: {
            SEARCH_VALUE() {
                this.sortProductsBySearchValue(this.SEARCH_VALUE);
            }
        },

        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived!')
                        this.sortByCategories()
                    }
                })
        }
    }

</script>


<style lang="scss">
    .v-catalog {
        &_list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &_link_to_cart {
           display: inherit;
        }
    }

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg,
    .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }

    


    /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-catalog {
            min-width: 100%;
            height: 20%;
            text-align: center;
        }

    }

</style>
