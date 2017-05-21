var zoeff = zoeff || {};
(function (app) {
    app.allStrips = [
        {
            id: 1,
            name: 'Suske en Wiske',
            image: 'suskeenwiske.png',
        },
        {
            id: 2,
            name: 'Jommeke',
            image: 'jommeke.png',
        },
        {
            id: 3,
            name: 'Lucky Luke',
            image: 'luckyluke.png',
        },
        {
            id: 4,
            name: 'Nero',
            image: 'nero.png',
        },
        {
            id: 5,
            name: 'F.C. De Kampioenen',
            image: 'fcdekampioenen.png',
        },
        {
            id: 6,
            name: 'De Smurfen',
            image: 'desmurfen.png',
        },
         {
            id: 7,
            name: 'Urbanus',
            image: 'urbanus.png',
        },
         {
            id: 8,
            name: 'De Kiekeboes',
            image: 'dekiekeboes.png',
        },
    ];

    var userStripsString = localStorage.getItem('user-strips');

    app.userStrips = !!userStripsString ? JSON.parse(userStripsString) : [];

    app.saveStrips = function (userStrips) {
        localStorage.setItem('user-strips', JSON.stringify(userStrips));
    }
})(zoeff);
