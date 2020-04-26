import Vue from "nativescript-vue";
import Master from "./components/Master";


new Vue({
    render: h => h('frame', [h(Master)])
      
}).$start()