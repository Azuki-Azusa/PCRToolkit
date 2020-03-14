new Vue({
    el: '#calculator',
    data: {
        hpLengthTotal: 10,
        hpLengthRest: 10,
        hpRest1: 3500000,
        hpRest2: 3500000,
        attack: 0
    },
    methods: {
        update: function() {
            this.hpRest2 = this.hpLengthRest / this.hpLengthTotal * 3500000;
            this.attack = this.hpRest1 - this.hpRest2;
        }
    },
    watch: {
        hpLengthTotal: function (newDamage, oldDamage) {
            if (this.hpLengthTotal < this.hpLengthRest) {
                this.hpLengthRest = this.hpLengthTotal;
            }
            this.update();
        },
        hpLengthRest: function (newRest, oldRest) {
            this.update();
        },
        hpRest1: function (newRest, oldRest) {
            this.update();
        }
    }
});