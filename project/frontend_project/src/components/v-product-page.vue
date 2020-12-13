<template>
  <div class='v-product-page'>
    <img v-if="product.image" class="v-catalog-item_image" :src=" require('../assets/images/' + product.image)" alt="img">
    <p>Product name: {{product.name}}</p>
    <p>Article: {{product.article}}</p>
    <p>Price: {{product.price}}</p>
   
    <button
        class="v-catalog-item_add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  
 
  

  export default {
    name: "v-product-page",
    props: {},
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      product() {
        let result = {}
        let vm = this;
        this.PRODUCTS.find(function (item) {
          if (item.article === vm.$route.query.product) {
            result = item;
          }
        })
        return result;
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart() {
        this.ADD_TO_CART(this.product)
      },
    },
    mounted() {
      if (!this.PRODUCTS.length) {
        this.GET_PRODUCTS_FROM_API()
      }
    }
  }
</script>

<style lang="scss">
 /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-product-page {
            min-width: 100%;
            height: 20%;
            text-align: center;
        }

    }
</style>
