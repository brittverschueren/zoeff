var zoeff = zoeff || {};
(function (app) {
    loggedIn = false;
    username = localStorage.getItem('username');
    app.userStrips = [];
    assignstrips = function () {
        app.loadStrips(function (strips) {
            app.userStrips = strips || [];
            app.stripsChange();
        });

    };

    app.allStrips = [{
            id: 1,
            name: 'Suske en Wiske',
            image: 'suskeenwiske.png',
            color: '#E74134',
        },
        {
            id: 2,
            name: 'Jommeke',
            image: 'jommeke.png',
            color: '#29A1DC',
        },
        {
            id: 3,
            name: 'Lucky Luke',
            image: 'luckyluke.png',
            color: '#F0E52A',
        },
        {
            id: 4,
            name: 'Nero',
            image: 'nero.png',
            color: '#E52921',
        },
        {
            id: 5,
            name: 'F.C. De Kampioenen',
            image: 'fcdekampioenen.png',
            color: '#58AE33',
            orientation: 'landscape',
        },
        {
            id: 6,
            name: 'De Smurfen',
            image: 'desmurfen.png',
            color: '#2078B5',
            orientation: 'landscape',
        },
        {
            id: 7,
            name: 'Urbanus',
            image: 'urbanus.png',
            color: '#E52621',
            orientation: 'landscape',
        },
        {
            id: 8,
            name: 'De Kiekeboes',
            image: 'dekiekeboes.png',
            color: '#034E40',
            orientation: 'landscape',
        },
        {
            id: 9,
            name: 'Kuifje',
            image: 'kuifje.png',
            color: '#FDEA70',
        },
    ];

    app.stripsChange = function () {}

    app.loadStrips = function (cb) {
        // var userStripsString = localStorage.getItem('user-strips');
        if (!username) return cb();
        var db = app.firebaseApp.database();
        db.ref('walls/' + username).once('value').then(function (snapshot) {
            var val = snapshot.val();
            cb(val);
        });


        // var userStripsString = localStorage.getItem('user-strips');
        // return !!userStripsString ? JSON.parse(userStripsString) : [];
    }

    app.saveQuizToWall = function (personages) {
        var strips = _.map(personages, function (personage) {
            switch (personage) {
                case 'Flip':
                    return app.allStrips[1];
                case 'Wiske':
                    return app.allStrips[0];
                case 'Marcel':
                    return app.allStrips[7];
                default:
                    return undefined;
            }
        }).filter(function (q) {
            return !!q
        });
        app.saveStrips(strips);
        assignstrips();
    }


    app.login = function (un) {
        loggedIn = true;
        username = un;
        localStorage.setItem('username', username);
        assignstrips();
    }

    app.logout = function () {
        localStorage.clear();
        loggedIn = false;
        app.router.go('/login');
    }

    app.saveStrips = function (userStrips) {
        var db = app.firebaseApp.database();

        db.ref('walls/' + username).set(userStrips);

        // localStorage.setItem('user-strips', JSON.stringify(userStrips));
    }
    app.getUsername = function (cb) {
        if (!cb) return username;
        var interval = setInterval(function () {
            if (username) {
                clearInterval(interval)
                cb(username);
            }
        }, 1000);

        return username;
    }

    var db = app.firebaseApp.database();
    db.ref('walls/' + username).on('value', function () {
        assignstrips();
    });

    assignstrips();
})(zoeff);