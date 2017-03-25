Vue.component('tabs', {
    data(){
        return { tabs: [] };
    },
    template: `
    <div>
        <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                <a :href="tab.href" @click.prevent="selectTab($event, tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    created(){
        this.tabs = this.$children;
    },
    mounted() {

    },
    methods:{
        selectTab( event , selectedTab ){
            this.tabs.forEach( function( tab ){
                tab.isActive = (tab.href === selectedTab.href);
            });
        }
    }
});

Vue.component('tab', {
    props:{
        name: {
            required: true
        },
        selected:{
            default : false
        }
    },
    data(){
        return {
            isActive: false
        }
    },
    template: `
        <div v-show="isActive" class="content">
            <slot></slot>
        </div>
    `,
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '_');;
        }
    },
});

new Vue({
    el: "#root",
    mounted() {

    }
});
