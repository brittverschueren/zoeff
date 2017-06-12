var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.myStrips = Vue.component('myStrips', {
        mounted: function () {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('quiz');
        },
        data: function () {
            var self = this;
            app.stripsChange = function () {
                self.userStrips = app.userStrips;
            }
            return {
                userStrips: app.userStrips
            };
        },
        methods: {
            deleteStrip: function (strip) {
                vex.dialog.open({
                    message: 'Bent u zeker dat u ' + strip.name + ' wil verwijderen?',
                    buttons: [
                        _.extend({}, vex.dialog.buttons.YES, {
                            text: 'Ja'
                        }),
                        _.extend({}, vex.dialog.buttons.NO, {
                            text: 'Nee'
                        })
                    ],
                    callback: function (data) {
                        if (data) {
                            vex.dialog.open({
                                message: 'Waarom verwijder je deze strip?',
                                input: '<input type="text" placeholder="Wil andere strips toevoegen, heb ze allemaal al,..."  required /> ',
                                buttons: [
                                    $.extend({}, vex.dialog.buttons.YES, {
                                        text: 'Verwijderen'
                                    }),
                                    $.extend({}, vex.dialog.buttons.NO, {
                                        text: 'Terug'
                                    })
                                ],
                                //placeholder: 'Wil andere strips toevoegen, heb ze allemaal al,...',
                                callback: function (value) {
                                    if (value) {
                                        var index = app.userStrips.indexOf(strip);
                                        app.userStrips.splice(index, 1);
                                        // this.allStrips = updateAllStrips(app.allStrips, this.userStrips);
                                        app.saveStrips(app.userStrips);
                                    } else{
                                       return; 
                                    }
                                }
                            })

                        }
                    }
                });
            },
        },
        template: '#my-strips',
    });
})(zoeff);