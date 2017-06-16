var zoeff = zoeff || {};
(function (app) {
    var routes = [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/my',
            component: app.components.myStrips
        },
        {
            path: '/add',
            component: app.components.allStrips
        },
        {
            path: '/login',
            component: app.components.login
        },
        {
            path: '/register',
            component: app.components.register
        },
        {
            path: '/quiz',
            component: app.components.quiz
        },
        {
            path: '/forum',
            component: app.components.forum
        },
        {
            path: '/forum/:id',
            name: 'forum-detail',
            component: app.components.post
        },

    ]

    var router = new VueRouter({
        routes: routes, // short for routes: routes
    });

    app.router = router;

    var vueApp = new Vue({
        router: router,
        data: function () {
            var self = this;
            app.getUsername(function (un) {
                self.username = un;
            });
            return {
                username: app.getUsername()
            }
        },
        methods: {
            logout: app.logout
        },
    }).$mount('#app');


})(zoeff);