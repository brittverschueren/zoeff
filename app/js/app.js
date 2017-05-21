var zoeff = zoeff || {};
(function (app) {
    var updateAllStrips = function (allStrips, userStrips) {
        return _.filter(allStrips, function (strip) {
            var ids = _.map(userStrips, function (userStrip) {
                return userStrip.id;
            });

            return _.indexOf(ids, strip.id) === -1;
        });
    };


    var vueApp = new Vue({
        el: '#app',
        data: {
            userStrips: app.userStrips,
            allStrips: updateAllStrips(app.allStrips, app.userStrips),
            add: false,
        },
        methods: {
            deleteStrip: function (strip) {
                vex.dialog.open({
                    message: 'Bent u zeker dat u ' + strip.name + ' wil verwijderen?',
                    buttons: [
                        _.extend({}, vex.dialog.buttons.YES, { text: 'Ja' }),
                        _.extend({}, vex.dialog.buttons.NO, { text: 'Nee' })
                    ],
                    callback: function (data) {
                        if (data) {
                            var index = app.userStrips.indexOf(strip);
                            app.userStrips.splice(index, 1);
                            this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                            app.saveStrips(app.userStrips);
                        }
                    }
                });
            },
            toggleStrip: function () {
                this.add = !this.add;
            },
            addStrip: function (strip) {
                if (app.userStrips.length >= 5) return;
                var index = app.allStrips.indexOf(strip);
                app.userStrips.push(app.allStrips[index]);
                this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                app.saveStrips(app.userStrips);
                this.add = false;
            }
        }
    });
})(zoeff);

