Vue.component('modal',{
    template: `
    <div class="modal fade in" id="" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" style="display:block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="$emit('closemymodal')">&times;</button>
            <h4 class="modal-title" id="">
                <slot name="title"></slot>
            </h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('closemymodal')">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
});

new Vue({
    el: "#root",
    data:{
        showModal: false
    }
});
