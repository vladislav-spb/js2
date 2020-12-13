<template>
    <div class="v-main-page">
        <div class="v-main-page promo-container">
            <!-- <p>
                <router-link :to="{name: 'catalog'}">
                    to Catalog
                </router-link>
            </p> -->
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "v-main-page",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }

</script>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Playfair+Display+SC&display=swap');

    .v-main-page {

        height: 331px;
        width: auto;

        .promo-container {
            height: inherit;
            background-image: url(../../img/tempsnip.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        &_h1 {
            margin: 0 auto;
            font-family: 'Cabin Sketch', cursive;
            color: white;
        }
    }

    .poplarGoods {
        margin: 0 auto;
    }
    
     /* css Mobile */

    /* CSS Mobile */
    
     @media only screen 
        and (min-device-width : 320px) 
        and (max-device-width : 568px) 
        and (max-device-width : 650px){
            
            .v-main-page {
                min-width: 100%;
               
                text-align: center;
            }
    }
</style>
