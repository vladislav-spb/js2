<template>
    <div class="v-cart-item">
        <img class="v-cart-item-image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item_info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}$</p>
            <p>article {{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
        <p>Qty:</p>
        <span class="quantity_bth" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity_bth" @click="incrementItem">+</span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>


<script>
    
export default {
    name: "v-cart-item",
    props:{
        cart_item_data: {
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
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment') 
      }, 
      deleteFromCart(){
          this.$emit('deleteFromCart')
      }  
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>


<style lang="scss">
    .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &__image {
        max-width: 50px;
    }
        .quantity_bth {
            cursor: pointer;
        }
    }
    .v-cart-item-image {
        width: 19%;
    }
    
     /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-cart-item {
            height: 20%;
            text-align: center;
        }

    }

</style>