var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.forum = Vue.component('forum', {
        data: function () {
            return {
                posts: app.posts,
                answer: undefined
            };
        },
        template: '#forum',
    });
})(zoeff);