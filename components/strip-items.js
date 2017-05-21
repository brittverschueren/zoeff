(function () {
    Vue.component('stripItems', {
        props: ['strips', 'click'],
        methods: {
            stripClick: function (strip) {
                this.click(strip);
            }
        },
        template: `
            <div class="strip-items row">
                <div v-on:click="stripClick(strip)" v-for="strip in strips" class="strip-item" v-bind:class="strip.orientation==='landscape'? 'landscape': 'portrait'" v-bind:style="{backgroundColor: strip.color }">
                    <img v-bind:alt="strip.name"  v-bind:src="'images/'+ strip.image">
                </div>
            </div>        
        `,
    });
})();