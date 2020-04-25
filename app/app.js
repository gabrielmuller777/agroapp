import Vue from "nativescript-vue";
import Master from "./components/Master";
import First from "./components/First";


new Vue({

    template: `
        <Frame>
            <Master />
        </Frame>`,

    components: {
        Master,
        First
    }
}).$start();