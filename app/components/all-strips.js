var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.allStrips = Vue.component('allStrips', {
        data: function () {
            return { allStrips: app.helpers.updateAllStrips(app.allStrips, app.userStrips) };
        },
        methods: {
            addStrip: function (strip) {
                if (app.userStrips.length >= 5) return;
                var index = app.allStrips.indexOf(strip);
                app.userStrips.push(app.allStrips[index]);
                this.allStrips = app.helpers.updateAllStrips(app.allStrips, this.userStrips);
                app.saveStrips(app.userStrips);
                app.router.push('my');
            },
        },
        template: '#all-strips',
    });
})(zoeff);