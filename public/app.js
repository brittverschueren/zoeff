var zoeff = zoeff || {};
(function (app) {
    var vueApp = new Vue({
        el: '#app',
        data: {
            userStrips: app.userStrips,
            allStrips: _.filter(app.allStrips, function (strip) {
                // // strip zit in app.userstrips
                // console.log(strip)
                // console.log(app.userStrips.indexOf(strip) > -1);
                // if (app.userStrips.indexOf(strip) > -1) {
                //     return false;
                // } else {
                //     return true;
                // }
                console.log('test');
                var ids = _.map(app.userStrips, function (userStrip) {
                    return userStrip.id;
                });

                return _.indexOf(ids, strip.id) === -1;
            }),
            add: false,
        },
        methods: {
            deleteStrip: function (strip) {
                var index = app.userStrips.indexOf(strip);
                app.userStrips.splice(index, 1);
            },
            toggleStrip: function () {
                this.add = !this.add;
            },
            addStrip: function (strip) {
                var index = app.allStrips.indexOf(strip);
                app.userStrips.push(app.allStrips[index]);
                this.add = false;
            }
        }
    });
})(zoeff);

