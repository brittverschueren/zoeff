var zoeff = zoeff || {};
zoeff.components = zoeff.components || {};
(function (app) {
    app.components.quiz = Vue.component('quiz', {
        data: function () {
            return {
                questions: app.questions,
                answer: undefined
            };
        },
        methods: {
            submit: function (ev) {
                ev.preventDefault();
                var answers = _.map(app.questions, function (question) {
                    return ev.target[question.text].value;
                }).filter(function (answer) {
                    return !!answer
                });
                // https://stackoverflow.com/questions/35119427/dedup-array-and-sort-array-by-most-frequent-occurrence-with-lodash
                var mostAnswer = _.chain(answers).countBy().toPairs().sortBy(1).reverse().map(0).value()[0];
                this.answer = mostAnswer;

                app.saveQuizToWall([this.answer]);
            }
        },
        template: '#quiz',
    });
})(zoeff);