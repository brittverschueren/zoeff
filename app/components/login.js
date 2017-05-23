var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.login = Vue.component('login', {
        template: '#login',
        methods: {
            login: function (ev) {
                ev.preventDefault();
                var target = ev.target;
                var data = {
                    username: target['username'].value,
                    password: target['wachtwoord'].value,
                }

                var db = app.firebaseApp.database();
                db.ref('users/' + data.username).once('value').then(
                    function (snapshot) {
                        var pw = snapshot.val().password;
                        if (pw === data.password) {
                            app.router.push('/my');
                        } else {
                            alert('niet aangemeld');
                        }
                    }
                )
            }
        }
    });
})(zoeff);