<template>
  <base-modal-delete
    :title="userStore.modelName"
    :recordName="userStore.recordName"
    :show="userStore.openModal.delete"
    @confirm="confirm"
    @close="userStore.OPEN_MODAL_DELETE(false)"
  ></base-modal-delete>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { vxm } from "src/store";
@Component
export default class UserDeleteVue extends Vue {
  //#region ### data ###
  userStore = vxm.userStore;
  //#endregion

  //#region ### methods ###
  confirm() {
    this.userStore.submitDelete(this);
  }
  //#endregion
}
</script>

