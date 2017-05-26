(function () {
    attachclicks = function (el, strips, clickstriphandler) {
        _.forEach(strips, function (strip, index) {
            var className = 'strip-' + (index + 1);
            var svg = _.find(el.children, function (el) { return el.tagName === 'svg'; });
            var children = _.filter(svg.children, function (el) {
                return (' ' + el.className.baseVal + ' ').indexOf(' ' + className + ' ') > -1;
            });
            _.forEach(children, function (child) {
                child.onclick = function () {
                    clickstriphandler(strip);
                };
            });
        })
    }
    Vue.component('stripWall', {
        mounted: function () {
            attachclicks(this.$el, this.strips, this.click)
        },
        updated: function () {
            attachclicks(this.$el, this.strips, this.click)
        },
        props: ['strips', 'click'],
        methods: {
            stripClick: function (strip) {
                this.click(strip);
            }
        },
        template: '#strip-wall',
    });
})();