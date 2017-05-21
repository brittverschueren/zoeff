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
            name: 'Suske en Wiske 1',
            image: 'suskeenwiske.png',
        },
        {
            id: 3,
            name: 'Suske en Wiske 2',
            image: 'suskeenwiske.png',
        },
        {
            id: 4,
            name: 'Suske en Wiske 3',
            image: 'suskeenwiske.png',
        },
        {
            id: 5,
            name: 'Suske en Wiske 4',
            image: 'suskeenwiske.png',
        },
        {
            id: 6,
            name: 'Suske en Wiske 5',
            image: 'suskeenwiske.png',
        },
    ];

    var userStripsString = localStorage.getItem('user-strips');

    app.userStrips = !!userStripsString ? JSON.parse(userStripsString) : [];

    app.saveStrips = function (userStrips) {
        localStorage.setItem('user-strips', JSON.stringify(userStrips));
    }
})(zoeff);
