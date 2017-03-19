Vue.component('message',{
    props:[
        'title',
        'body',
    ],
    template:`<div class="jumbotron"><h1>{{ title }}</h1><p>{{ body }}</p></div>`
});

Vue.component('alert',{
    props:['title', 'body', 'type'],
    template:`<div class="alert alert-info" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>{{ title }}</strong> {{ body }}</div>`
});

new Vue({
    el: '#root'
});
