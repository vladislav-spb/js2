<template>
    <div class="v-select">
        <p class="title"
           @click="areOptionsVisible = !areOptionsVisible"
        >{{selected}}</p>
        <div 
          class="options"
          v-if="areOptionsVisible"
           >
            <p
               v-for="option in options"
               :key="option.value"
               @click="selectOption(option)"
               >
                {{option.name}}
            </p>
        </div>
    </div>
</template>


<script>
    
export default {
    name: "v-select",
    props:{
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
       selectOption(option) {
         this.$emit('select', option)
           this.areOptionsVisible = false;
       },
        hideSelect() {
           this.areOptionsVisible = false; 
        }
    },
    maunted() {
       document.addEventListener('click', this.hideSelect.bind(this), true) 
    },
    beforeDestroy() {
       document.removeEventListener('click', this.hideSelect)
    },
    computed: {}
}
</script>


<style>
    .v-select {
        position: relative;
        width: 160px;
        cursor: pointer;
    }
    .title {
        border: solid 1px #aeaeae;
    }
    .v-select p {
        margin: 0;
    }
    
    .options {
        border: solid 1px #acacac;
        position: absolute;
        top: 30px;
        right: 0;
        width: 100%;
    }
    .options p:hover {
        background: #e7e7e7;
    }
    
     /* css Mobile */

    /* CSS Mobile */

    @media only screen and (min-device-width : 320px) and (max-device-width : 770px) {
        .v-select {
            min-width: 30%;
            height: 20%;
            text-align: center;
        }

    }
</style>