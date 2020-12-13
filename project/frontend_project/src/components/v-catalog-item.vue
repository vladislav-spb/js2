<template>
    <div class="v-catalog-item">
       <img class="v-catalog-item_image" :src=" require('../assets/images/' + product_data.image)" alt="img" @click="productClick">
        <p class="v-catalog-item_name">{{product_data.name}}</p>
        <p class="v-catalog-item_price">{{product_data.price}}$</p>
        <button 
        class="v-catalog-item_add_to_cart_bth bth"
        @click="addToCart">
        Add to cart
        </button>
    </div>
</template>


<script>
export default {
    name: "v-catalog-item",
    props:{
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return{}
    },
    computed: {},
    methods: {
        productClick() {
          this.$emit('productClick', this.product_data.article)  
        },
        addToCart() {
            this.$emit( 'addToCart', this.product_data)
        }
    }
}
</script>


<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
        &_image {
            width: 60%;
        }
    }
    
    /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-catalog-item {
            min-width: 90%;
            height: 20%;
            text-align: center;
            flex-basis: auto;
        }

    }
</style>