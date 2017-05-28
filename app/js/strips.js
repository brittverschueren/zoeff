var zoeff = zoeff || {};
(function (app) {
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


    app.loadStrips = function () {
        var userStripsString = localStorage.getItem('user-strips');
        return !!userStripsString ? JSON.parse(userStripsString) : [];
    }

    app.userStrips = app.loadStrips();

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
        app.userStrips = app.loadStrips();
    }

    app.saveStrips = function (userStrips) {
        localStorage.setItem('user-strips', JSON.stringify(userStrips));
    }
})(zoeff);