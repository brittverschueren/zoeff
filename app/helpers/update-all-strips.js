var zoeff = zoeff || {};
zoeff.helpers = zoeff.helpers || {};
(function (app) {
    app.helpers.updateAllStrips = function (allStrips, userStrips) {
        return _.filter(allStrips, function (strip) {
            var ids = _.map(userStrips, function (userStrip) {
                return userStrip.id;
            });

            return _.indexOf(ids, strip.id) === -1;
        });
    };
})(zoeff);