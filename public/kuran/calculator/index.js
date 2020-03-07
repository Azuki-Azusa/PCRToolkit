new Vue({
    el: '#calculator',
    data: {
        damage: 0,
        rest: 0,
        re: 0,
        mix: 0,
    },
    methods: {
        update: function() {
            this.re = (1 - this.rest / this.damage) * 90 + 20;
            this.mix = this.rest / (1 - 70 / 90);
        }
    },
    watch: {
        damage: function (newDamage, oldDamage) {
            this.update();
        },
        rest: function (newRest, oldRest) {
            this.update();
        }
    }
});