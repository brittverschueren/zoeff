(function () {
    Vue.component('stripItems', {
        props: ['strips', 'click'],
        methods: {
            stripClick: function (strip) {
                this.click(strip);
            }
        },
        template: `
            <div>
                <div v-for="strip in strips">
                    <img v-bind:alt="strip.name" v-bind:src="'images/'+ strip.image" v-on:click="stripClick(strip)">
                </div>
            </div>        
        `
    });
})();