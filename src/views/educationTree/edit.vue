<template>
  <base-modal-edit
    :title="educationTreeStore.modelName"
    :show="educationTreeStore.openModal.edit"
    @confirm="educationTreeStore.submitEdit"
    @reset="educationTreeStore.resetEdit"
    @open="lookupStore.fillEducationTreeState"
    @close="educationTreeStore.OPEN_MODAL_EDIT(false)"
  >
    <base-input :model="$v.educationTree.Name" class="col-md-6"/>
    <base-select
      :model="$v.educationTree.LookupId_EducationTreeState"
      :options="lookupStore.educationTreeStateDdl"
      class="col-md-6"
      clearable
    />
  </base-modal-edit>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
import { educationTreeValidations } from "src/validations/EducationTreeValidation";

@Component({
  validations: educationTreeValidations
})
export default class EducationTreeEditVue extends Vue {
  $v: any;

  //#region ### data ###
  educationTreeStore = vxm.educationTreeStore;
  lookupStore = vxm.lookupStore;
  educationTree = vxm.educationTreeStore.educationTree;
  //#endregion

  //#region ### hooks ###
  created() {
    this.educationTreeStore.SET_EDIT_VUE(this);
  }
  //#endregion
}
</script>

