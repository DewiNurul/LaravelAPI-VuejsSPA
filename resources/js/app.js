import Vue from 'vue';
import router from './router';
import App from './components/App';


require('./bootstrap');
//ini adalah bootstrapnya bootstrap.js

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});
