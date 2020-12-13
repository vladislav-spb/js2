<template>
    <div class="footer container">
        <div class="footer_copyrightsLeft">
            © 2020 ZD
        </div>
        <div class="footer_copyrightsRight">
            <a href="#">
                <i class="fab fa-facebook-f"><span class="material-icons">
                        facebook
                    </span></i></a>

            <a href="#"> <i class="fab fa-instsgram"></i><span class="material-icons">
                    camera_alt
                </span></a>
        </div>
    </div>
</template>


<script>
    /*import {
    mapActions,
    mapGetters
} from 'vuex'*/

    export default {
        name: "v-footer",
        props: {},
        data() {
            return {}
        },

        computed: {},
        methods: {}
    }

</script>


<style lang="scss">
    .footer {
        width: 100%;
        height: 100px;
        padding: 28px 0 5px 0;
        text-align: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    .container {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
