Vue.component('modal',{
    template: `
    <div class="modal fade in" style="display:block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="$emit('closemymodal')">&times;</button>
            <h4 class="modal-title">
                <slot name="title"></slot>
            </h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"><div>
                <button type="button" class="btn btn-primary" @click="$emit('closemymodal')">Close</button>
            </div></slot>
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
