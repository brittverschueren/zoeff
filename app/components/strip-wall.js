(function (app) {
    attachclicks = function (el, strips, clickstriphandler) {
        _.forEach(strips, function (strip, index) {
            var className = 'strip-' + (index + 1);
            var svg = _.find(el.children, function (el) {
                return el.tagName === 'svg';
            });
            var children = _.filter(svg.childNodes, function (el) {
                return el &&
                    el.className &&
                    (' ' + el.className.baseVal + ' ').indexOf(' ' + className + ' ') > -1;
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
        data: function () {
            var self = this;
            app.getUsername(function (un) {
                self.username = un;
                console.log(un)
            });
            return {
                username: app.getUsername()
            }
        },
        props: ['strips', 'click'],
        template: '#strip-wall',
    });
})(zoeff);