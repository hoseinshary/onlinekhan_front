<template>
  <base-modal-create
    :title="writerStore.modelName"
    :show="writerStore.openModal.create"
    @confirm="writerStore.submitCreate"
    @reset="writerStore.resetCreate"
    @close="writerStore.OPEN_MODAL_CREATE(false)"
  >
    <base-input :model="$v.writer.Name" class="col-md-6"/>
    <base-field :model="$v.writer.UserId" class="col-md-6">
      <q-input v-model="searchTerm" placeholder="کدملی">
        <q-autocomplete
          @search="search"
          @selected="selected"
          :min-characters="2"
          :max-results="10"
        />
      </q-input>
    </base-field>
     <slot>
      <q-field class="col-sm-12">
        <q-uploader
          url="url"
          float-label="تصویر"
          name="img"
          auto-expand
          ref="fileUpload"
          extensions=".jpg , .png"
        />
      </q-field>
    </slot>
  </base-modal-create>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import { writerValidations } from "src/validations/WriterValidation";

@Component({
  validations: writerValidations
})
export default class WriterCreateVue extends Vue {
  $v: any;

  //#region ### data ###
  writerStore = vxm.writerStore;
  userStore = vxm.userStore;
  writer = vxm.writerStore.writer;
  searchTerm = "";
  //#endregion

  //#region ### methods ###
  search(terms, done) {
    var data = terms.split("-");
    var nationalNo = "";
    var family = "";
    var name = "";

    if (data.length == 3) {
      nationalNo = data[0];
      family = data[1];
      name = data[2];
    } else if (data.length == 2) {
      nationalNo = data[0];
      name = data[2];
    }
    if (data.length == 1) {
      nationalNo = data[0];
    }

    this.userStore.search({ nationalNo, family, name }).then(() => {
      done(this.userStore.searchDdl);
    });
  }

  selected(term) {
    this.searchTerm = term.label;
    this.writer.Name = term.label;
    this.writer.UserId = term.value;
  }
  //#endregion

  //#region ### hooks ###
  created() {
    this.writerStore.SET_CREATE_VUE(this);
  }
  //#endregion
}
</script>

