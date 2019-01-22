window.Event = new Vue();

Vue.component('sandbox', {
    template: `
    <div class="site-wrap">
        <div class="container">
            <lottie-simple classname="anim-simple" file="red" />
         </div>
    </div>
  `,
})


Vue.component('lottie-simple', {
    props: {
        classname: String,
        file: String,
    },
    template: `<div :class="classname"></div>`,
    data() {
        return {
            animData: {},
        }
    },
    mounted() {
        this.animData = this.buildAnimation();
    },
    methods: {
        buildAnimation() {
            const elt = this.$el;
            const animData = {
                wrapper: elt,
                animType: 'svg',
                loop: true,
                prerender: true,
                autoplay: true,
                path: `./${this.file}.json`,
            };
            return lottie.loadAnimation(animData);
        },
    }
})


var app = new Vue({
    el: '#app',
    methods: {
        getCSS(prop) { return window.getComputedStyle(document.documentElement).getPropertyValue('--' + prop); },
        setCSS(prop, data) { document.documentElement.style.setProperty('--' + prop, data); },
    }
})