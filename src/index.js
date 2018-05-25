import Vue from "vue";

let data = {
    message: "Hello World!"
};

const vue = new Vue({
    el: "#app",
    data,
    created: function() {
        console.log({data});
    }
});

