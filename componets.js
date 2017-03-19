Vue.component('task-list',{
    template: `
    <div>
        <task v-for='task in tasks' v-text='task.name'></task>
    </div>
`,
    data(){
        return {
            tasks: [
                {name: 'Сходить в магазин', complite: false},
                {name: 'Сходить в банк', complite: true},
                {name: 'Убрать в комнате', complite: false},
            ]
        };
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
