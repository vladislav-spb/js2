<template>
    <div class="v-main-wrapper">
      <v-header/>
       <keep-alive>
           <router-view></router-view>
       </keep-alive>
   <!-- <v-catalog /> -->
   <!-- <v-cart -->
   <!--   v-if="CART.length"-->
   <!--     :cart_data="CART"-->
   <!-- />-->
   <v-footer/>
    </div>
</template>




<script> 
    import vHeader from './layouts/v-header'
    import vFooter from './layouts/v-footer'
   // import vCatalog from './v-catalog'
    //import vCart from './v-cart'
   // import {mapGetters} from 'vuex'
    
    export default {
        name: 'v-main-wrapper',
        components: {
       //        vCatalog,
       //     vCart,
            vHeader,
            vFooter
        },
        props:{},
        data() {
            return{
                
            }
        },
        computed: {
           // ...mapGetters([
           //     'CART'
           // ])
        },
        methods: {},
        watch: {},
        mounted() {} 
    }

</script>


<style>
    .v-main-wrapper {
        margin: 0 auto;
    }
    
     /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-main-wrapper {
            min-width: 100%;
            height: 20%;
            text-align: center;
        }

    }

</style>
