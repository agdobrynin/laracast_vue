Vue.component('message',{
    props:['title','body'],
    data(){
        return{
            isVisible: true
        }
    },
    template:`<div class="jumbotron" v-show="isVisible"><button type="button" @click="isVisible = false" class="close"><span>&times;</span></button>
    <h1>{{ title }}</h1><p>{{ body }}</p></div>`,
});

Vue.component('alert',{
    props:['title', 'body', 'alertclass'],
    data(){
        return{
            isVisible: true
        }
    },
    mounted() {

    },
    methods:{
        hide(){
            this.isVisible = false
        }
    },
    template:`<div :class="this.alertclass" class="alert alert-info" v-show="isVisible">
    <button type="button" class="close" @click="isVisible = false"><span>&times;</span></button>
    <strong>{{ title }}</strong> {{ body }}
    <div class="container">
        <div><button type="button" class="btn btn-default" @click="hide">закрыть</button></div>
    </div>
    </div>`
});

let app = new Vue({
    el: '#root'
});
