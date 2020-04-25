import Vue from "nativescript-vue";
import Home from "./components/Home";
import First from "./components/First";


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home,
        First
    }
}).$start();
