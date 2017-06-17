var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.forum = Vue.component('forum', {
        mounted: function () {
            var vm = this;
            var $grid = $(vm.$el).isotope({
                itemSelector: '.form-post',
                percentPosition: false,
            });

            $('#filters').on('click touchstart', 'a', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
        },
        data: function () {

            return {
                posts: app.posts,
                answer: undefined
            };
        },
        template: '#forum',
    });
})(zoeff);