import "babel-polyfill";
import Vue from 'vue';
import router from './router';
import store from './vuex';

import './styles/index.scss';
//小图标
// import "./font/iconfont.css"

new Vue({
  el: '#app',
  router,
  store,
  watch: {
    $route(to, from) {
    }
  }

})
