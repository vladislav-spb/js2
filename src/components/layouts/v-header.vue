<template>
    <header class="v-header">
        <div class="v-header_headerInside">
            <router-link :to="{name: 'mainPage'}">
                <img class="logo" src="../../assets/logo.gif" alt="">
            </router-link>
            <nav>
                <router-link :to="{name: 'catalog'}">
                    Catalog
                </router-link>
                <a href="#">Contacts</a>
                <a href="#">Brands</a>
            </nav>

            <div id="number" class="phone mobile text num" style="color: #1ff1ff; text-align: center" name="phone_number">
                <p>
                    <a href="#">+7(999)888-77-66</a>
                </p>
            </div>

            <div class="search-field">
                <input type="text" v-model="searchValue">
                <button class="search_bth">
                    <i class="material-icons" @click="search(searchValue)">search</i>
                </button>
                <button class="search_bth">
                    <i class="material-icons" @click="clearSearchField"><span class="material-icons">
                            clear
                        </span></i>
                </button>
            </div>
        </div>

    </header>

</template>


<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: "v-header",
        props: {},
        data() {
            return {
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH_VALUE'
            ])
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_VALUE_TO_VUEX'
            ]),

            search(value) {
                this.GET_SEARCH_VALUE_TO_VUEX(value);
                if (this.$route.path !== '/catalog') {
                    this.$router.push('/catalog')
                }
            },
            clearSearchField() {
                this.searchValue = ''
                this.GET_SEARCH_VALUE_TO_VUEX();
                if (this.$route.path !== '/catalog') {
                    this.$router.push('/catalog')
                }
            }
        }
    }

</script>


<style lang="scss">
    .v-header {
        color: aqua;
        &_headerInside {
            height: inherit;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .logo {
            width: 100px;
        }

        .search-field {
            padding: 20px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .search_bth {
            margin-left: 16px;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
        }

        a {
            text-decoration: none;
            color: #551A8B;
            display: inline-block;
            padding: 0px 16px 0px 0px;
        }

        a:hover {
            color: palevioletred;
        }
    }


    /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-header {
            min-width: 100%;
            height: 20%;
            text-align: center;
        }

        .headerInside {
            min-width: 100%;
            height: 20%;
            text-align: center;
        }
    }

</style>
