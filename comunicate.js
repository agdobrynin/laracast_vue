Vue.component('coupon',{
    template:`
        <input placeholder="Ведите номер купона" @blur="onCouponApplied">
    `,
    methods:{
        onCouponApplied(){
            this.$emit('applied');
        }
    }
});

new Vue({
    el: "#root",
    methods:{
        onCouponApplied(){
            alert('Купон применен');
        }
    }
})
