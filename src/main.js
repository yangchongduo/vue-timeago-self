// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';

Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由


// 创建一个 store 对象用于管理应用状态


window.__lendApp__ = new Vue({
  el: '#app',
  render: h => h(App)
});