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
    ]

    var router = new VueRouter({
        routes: routes, // short for routes: routes
    });

    app.router = router;

    var vueApp = new Vue({
        router: router,
    }).$mount('#app');

    Vue.use(VueFire);
})(zoeff);