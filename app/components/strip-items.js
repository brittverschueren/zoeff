(function () {
    Vue.component('stripItems', {
        props: ['strips', 'click'],
        methods: {
            stripClick: function (strip) {
                this.click(strip);
            }
        },
        template: '#strip-items',
    });
})();