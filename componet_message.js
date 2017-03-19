Vue.component('message',{
    props:['title','body','alertclass'],
    template:`<div class="jumbotron"><button type="button" class="close"><span>&times;</span></button>
    <h1>{{ title }}</h1><p>{{ body }}</p></div>`
});

Vue.component('alert',{
    props:['title', 'body', 'alertclass'],
    mounted() {
        console.log(this.alertclass);
    },
    template:`<div class="alert alert-info">
    <button type="button" class="close"><span>&times;</span></button>
    <strong>{{ title }}</strong> {{ body }}</div>`
});

let app = new Vue({
    el: '#root'
});
