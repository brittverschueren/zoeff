var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.post = Vue.component('post', {
        data: function () {
            var id = this.$route.params.id;
            var post = _.find(app.posts, function (post) {
                return post.id === +id;
            });
            return {
                post: post
            };
        },
        template: '#post',
    });
})(zoeff);