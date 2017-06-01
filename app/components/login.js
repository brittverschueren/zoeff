var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.login = Vue.component('login', {
        template: '#login',
        beforeMount: function () {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('login');
        },
         beforeDestroy: function () {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('login');
        },
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
                        var val = snapshot.val();
                        if (!val) {
                            alert('Gebruikersnaam of wachtwoord fout');

                        }
                        else {
                            var pw = val.password;

                            if (pw === data.password) {
                                app.login(data.username);
                                app.router.push('/my');
                            } else {
                                alert('Gebruikersnaam of wachtwoord fout');
                            }
                        }

                    }
                )
            }
        }
    });
})(zoeff);