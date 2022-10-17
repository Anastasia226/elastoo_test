import Vue from 'vue';
import App from './App.vue';
import {
    Select,
    Option,
    Button,
    Dialog
} from 'element-ui';


Vue.config.productionTip = false;

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.component(Option.name, Option);

new Vue({
    render: h => h(App),
}).$mount('#app');
