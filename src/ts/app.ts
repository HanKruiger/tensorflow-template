import 'img/favicon.png'
import 'scss/style.scss'

import SumComponent from 'SumComponent.vue'
import Vue from 'vue'

const v = new Vue({
    el: '#app',
    template: '<sum-component/>',
    components: {
        SumComponent
    }
})
