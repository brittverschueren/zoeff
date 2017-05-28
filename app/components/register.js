var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.register = Vue.component('register', {
        template: '#register',
        beforeMount: function () {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('registreren');
        },
        beforeDestroy: function () {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('registreren');
        },
        methods: {
            register: function (ev) {
                ev.preventDefault();
                var target = ev.target;
                var data = {
                    lastname: target['naam'].value,
                    firstname: target['voornaam'].value,
                    username: target['gebruikersnaam'].value,
                    email: target['emailadres'].value,
                    password: target['wachtwoord'].value,
                    phone: target['telefoon'].value,
                    favorite: target['favorite'].value
                }

                var db = app.firebaseApp.database();
                db.ref('users/' + data.username).set(data);
                db.ref('users/' + data.username).once('value').then(
                    function (snapshot) {
                        var pw = snapshot.val().password;
                        if (pw === data.password) {
                            app.router.push('/my');
                        }
                    }
                )
            }
        }
    });
})(zoeff);