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
                var index = app.userStrips.indexOf(strip);
                app.userStrips.splice(index, 1);
                this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                app.saveStrips(app.userStrips);
            },
            toggleStrip: function () {
                this.add = !this.add;
            },
            addStrip: function (strip) {
                var index = app.allStrips.indexOf(strip);
                app.userStrips.push(app.allStrips[index]);
                this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                app.saveStrips(app.userStrips);
                this.add = false;
            }
        }
    });

    Vue.component('stripItems',{
        props:['strips'],
        template: `
            <div>
                <div v-for="strip in strips">
                    <img v-bind:alt="strip.name" v-bind:src="'images/'+ strip.image" v-on:click="addStrip(strip)">
                </div>
            </div>
        `
    })
})(zoeff);

