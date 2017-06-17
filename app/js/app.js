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

    var updateMenu = function (self) {
        self.loggedInStyle.hide = self.$route.path === '/login' || self.$route.path === '/register';
        self.forumStyle.hide = self.$route.path !== '/forum';
    }

    var vueApp = new Vue({
        router: router,
        mounted: function () {
            updateMenu(this);
            $(".nav-m").slicknav({
                duplicate: false,
                closeOnClick: true,
            });
            $(".slicknav_menu").prepend('<a href="/zoeff"><div class="logo"> </div></a>');
            app.getUsername(function (un) {
                this.username = un;
            });
        },
        data: {
            username: app.getUsername(),
            loggedInStyle: {
                hide: true
            },
            forumStyle: {
                hide: true
            }
        },
        watch: {
            '$route': function () {
                updateMenu(this);
            }
        },
        methods: {
            logout: app.logout
        },
    }).$mount('#app');


})(zoeff);