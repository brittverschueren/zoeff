var zoeff = zoeff || {};
(function (app) {
    app.allStrips = [
        {
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

    var userStripsString = localStorage.getItem('user-strips');

    app.userStrips = !!userStripsString ? JSON.parse(userStripsString) : [];

    app.saveStrips = function (userStrips) {
        localStorage.setItem('user-strips', JSON.stringify(userStrips));
    }
})(zoeff);
