var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.myStrips = Vue.component('myStrips', {
        data: function () {
            return { userStrips: app.userStrips };
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
                            // this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                            app.saveStrips(app.userStrips);
                        }
                    }
                });
            },
        },
        template: '#my-strips',
    });
})(zoeff);